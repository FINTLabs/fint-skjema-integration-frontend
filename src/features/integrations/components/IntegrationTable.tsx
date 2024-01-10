import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {
    comparator,
    getDestinationDisplayName,
    getSourceApplicationDisplayName,
    getStateDisplayName,
    Page,
} from "../../../util/DataGridUtil";
import {Box, HStack, Loader, Pagination, SortState, Table} from "@navikt/ds-react";
import IntegrationPanel from "./IntegrationPanel";
import {useTranslation} from "react-i18next";
import EventRepository from "../../../api/EventRepository";
import IntegrationRepository from "../../../api/IntegrationRepository";
import {IIntegrationStatistics} from "../../dashboard/types/IntegrationStatistics";
import {IIntegration} from "../../integration/types/Integration";
import {IIntegrationMetadata} from "../../configuration/types/Metadata/IntegrationMetadata";
import {SourceApplicationContext} from "../../../context/SourceApplicationContext";

type IntegrationProps = {
    id: string;
}

const IntegrationTable: React.FunctionComponent<IntegrationProps> = (props: IntegrationProps) => {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.integrations.table'})
    const [page, setPage] = useState(1);
    const rowsPerPage = 10;
    const [integrations, setIntegrations] = useState<Page<IIntegration> | undefined>()
    const [sort, setSort] = useState<SortState | undefined>({orderBy: 'state', direction: "ascending"});
    const {allMetadata} = useContext(SourceApplicationContext)

    useEffect(() => {
        getAllIntegrations(sort)
    }, [])

    useEffect(() => {
        setIntegrations({content: []})
        getAllIntegrations(sort);
    }, [page, setPage])

    const getAllIntegrations = async (sort?: SortState) => {
        if (allMetadata) {
            try {
                const response = await EventRepository.getStatistics();
                const data = response.data;

                if (data) {
                    const stats = data;

                    const integrationResponse = await IntegrationRepository.getIntegrations(page - 1, rowsPerPage, sort ? sort.orderBy : "state", sort ? sort.direction === 'ascending' ? "ASC" : "DESC" : "ASC");
                    const mergedList = integrationResponse.data || [];

                    stats.forEach((value: IIntegrationStatistics) => {
                        mergedList.content.forEach((integration: IIntegration) => {
                            if (integration.sourceApplicationIntegrationId === value.sourceApplicationIntegrationId) {
                                integration.errors = value.currentErrors;
                                integration.dispatched = value.dispatchedInstances;
                            }
                        });
                    });

                    allMetadata.forEach((value: IIntegrationMetadata) => {
                        mergedList.content.forEach((integration: IIntegration) => {
                            if (integration.sourceApplicationIntegrationId === value.sourceApplicationIntegrationId) {
                                integration.displayName = value.integrationDisplayName;
                            }
                        });
                    });

                    const sortedData: IIntegration[] = mergedList.content
                        .slice()
                        .sort((a: IIntegration, b: IIntegration) => {
                            if (sort) {
                                return sort.direction === "ascending"
                                    ? comparator(b, a, sort.orderBy)
                                    : comparator(a, b, sort.orderBy);
                            }
                            return 1;
                        });
                    setIntegrations({...mergedList, content: sortedData});
                }
            } catch (e) {
                console.error('Error: ', e);
                setIntegrations({content: []})
            }
        }
    };

    const handleSort = (sortKey: string) => {
        setSort(prevSort => {
            return prevSort && sortKey === prevSort.orderBy && prevSort.direction === "descending"
                ? undefined
                : {
                    orderBy: sortKey,
                    direction:
                        prevSort && sortKey === prevSort.orderBy && prevSort.direction === "ascending"
                            ? "descending"
                            : "ascending",
                };
        });
    };

    useEffect(() => {
        getAllIntegrations(sort)
    }, [sort]);

    return integrations ? (
        <Box>
            <Box background={'surface-default'} style={{height: '70vh', overflowY: "scroll"}}>
                <Table sort={sort} onSortChange={(sortKey) => handleSort(sortKey ? sortKey : 'id')}  id={props.id}>
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeader/>
                            <Table.ColumnHeader sortKey="id" sortable>{t('column.id')}</Table.ColumnHeader>
                            <Table.ColumnHeader>{t('column.sourceApplicationId')}</Table.ColumnHeader>
                            <Table.ColumnHeader
                            >{t('column.sourceApplicationIntegrationId')}</Table.ColumnHeader>
                            <Table.ColumnHeader
                            >{t('column.sourceApplicationIntegrationIdDisplayName')}</Table.ColumnHeader>
                            <Table.ColumnHeader>{t('column.destination')}</Table.ColumnHeader>
                            <Table.ColumnHeader>{t('column.state')}</Table.ColumnHeader>
                            <Table.ColumnHeader>{t('column.dispatched')}</Table.ColumnHeader>
                            <Table.ColumnHeader>{t('column.errors')}</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {integrations?.content?.map((value, i) => {
                            return (
                                <Table.ExpandableRow key={i} content={
                                    <IntegrationPanel
                                        id={'panel-' + i}
                                        integration={value}
                                    />}
                                >
                                    <Table.DataCell>{value.id}</Table.DataCell>
                                    <Table.DataCell
                                        scope="row">{getSourceApplicationDisplayName(Number(value.sourceApplicationId))}</Table.DataCell>
                                    <Table.DataCell>{value.sourceApplicationIntegrationId}</Table.DataCell>
                                    <Table.DataCell>{value.displayName}</Table.DataCell>
                                    <Table.DataCell>{getDestinationDisplayName(value.destination ?? '')}</Table.DataCell>
                                    <Table.DataCell>
                                        {getStateDisplayName(value.state ?? '')}
                                    </Table.DataCell>
                                    <Table.DataCell>{value.dispatched}</Table.DataCell>
                                    <Table.DataCell>{value.errors}</Table.DataCell>
                                </Table.ExpandableRow>
                            );
                        })}
                    </Table.Body>
                </Table>
            </Box>
            <HStack justify={"center"}>
                {integrations?.totalElements && integrations?.totalElements > rowsPerPage &&
                    <Pagination
                        page={page}
                        onPageChange={setPage}
                        count={integrations?.totalPages ?? 1}
                        size="small"
                    />
                }
            </HStack>
        </Box>
    ) : <Loader size={"xlarge"}/>;
}

export default IntegrationTable;