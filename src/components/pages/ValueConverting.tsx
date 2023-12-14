import React, {useState} from 'react';
import PageTemplate from "../../components/templates/PageTemplate";
import ValueConvertingForm from "../../features/valueConverting/components/ValueConvertingForm";
import {RouteComponent} from "../../routes/Route";
import ValueConvertingTable from "../../features/valueConverting/components/ValueConvertingTable";
import ValueConvertingRepository from "../../api/ValueConvertingRepository";

const ValueConverting: RouteComponent = () => {
    const [existingValueConverting, setExistingValueConverting] = useState(undefined);
    const [newValueConverting, setNewValueConverting] = useState<boolean>(false)
    return (
        <PageTemplate id={'valueConverting'} keyPrefix={'pages.valueConverting'}>
            {existingValueConverting || newValueConverting ?
                <ValueConvertingForm
                    existingValueConverting={existingValueConverting ?? undefined}
                    setNewValueConverting={setNewValueConverting}
                    setExistingValueConverting={setExistingValueConverting}
                />
                :
                <ValueConvertingTable
                    setNewValueConverting={setNewValueConverting}
                    onValueConvertingSelected={(id: number) => {
                        return ValueConvertingRepository.getValueConverting(id)
                            .then(response => {
                                setExistingValueConverting(response.data);
                            })
                            .catch(e => {
                                console.log(e);
                            });
                    }
                    }/>
            }
        </PageTemplate>
    );
}

export default ValueConverting;