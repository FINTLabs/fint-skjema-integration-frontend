import axios from 'axios';
import { Filters } from '../features/instances/filter/types';

const getEvents = (page: number, size: number, sortProperty: string, sortDirection: string) => {
    return axios.get(`/api/intern/instance-flow-tracking/summaries`, {
        params: {
            side: page,
            antall: size,
            sorteringFelt: sortProperty,
            sorteringRetning: sortDirection,
            bareSistePerInstans: false,
        },
    });
};

// const getLatestEvents = (
//     page: number,
//     size: number,
//     sortProperty: string,
//     sortDirection: string
// ) => {
//     return axios.get(`/api/intern/instance-flow-tracking/summaries`, {
//         params: {
//             side: page,
//             antall: size,
//             sorteringFelt: sortProperty,
//             sorteringRetning: sortDirection,
//             bareSistePerInstans: true,
//         },
//     });
// };

const getLatestEvents = (size: number, filters?: Filters) => {
    const params: Record<string, string | string[] | boolean | number> = {
        size: size,
    };

    if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
            if (Array.isArray(value) && value.length > 0) {
                params[key] = value;
            } else if (value) {
                // Map specific keys to the expected API format
                switch (key) {
                    case 'timeCurrentPeriod':
                        params['time.currentPeriod'] = value;
                        break;
                    case 'timeOffSetHours':
                        params['time.offset.hours'] = value;
                        break;
                    case 'timeOffsetMinutes':
                        params['time.offset.minutes'] = value;
                        break;
                    case 'timeTimestampMin':
                        params['time.manual.min'] = value;
                        break;
                    case 'timeTimestampMax':
                        params['time.manual.max'] = value;
                        break;
                    default:
                        params[key] = value;
                        break;
                }
            }
        });
    }

    return axios.get('/api/intern/instance-flow-tracking/summaries', { params });
};

const getEventsByInstanceId = (
    rowCount: string,
    sortProperty: string,
    sortDirection: string,
    sourceApplicationIntegrationId: string,
    kildeapplikasjonId?: number,
    kildeapplikasjonInstansId?: string
) => {
    return axios.get(`/api/intern/instance-flow-tracking/events`, {
        params: {
            size: rowCount,
            sorteringFelt: sortProperty,
            sorteringRetning: sortDirection,
            sourceApplicationId: kildeapplikasjonId,
            sourceApplicationInstanceId: kildeapplikasjonInstansId,
            sourceApplicationIntegrationId: sourceApplicationIntegrationId,
        },
    });
};

const manualDispatchEvent = (
    sourceApplicationInstanceId: string,
    sourceApplicationId: string,
    archiveInstanceId: string,
    sourceApplicationIntegrationId: string
) => {
    return axios.post(`/api/intern/instance-flow-tracking/events/instance-manually-processed`, {
        archiveInstanceId,
        sourceApplicationId,
        sourceApplicationInstanceId,
        sourceApplicationIntegrationId,
    });
};
const manualRejectEvent = (
    sourceApplicationInstanceId: string,
    sourceApplicationId: string,
    sourceApplicationIntegrationId: string
) => {
    return axios.post(`/api/intern/instance-flow-tracking/events/instance-manually-rejected`, {
        sourceApplicationId,
        sourceApplicationInstanceId,
        sourceApplicationIntegrationId,
    });
};

const getAllStatistics = () => {
    return axios.get(`/api/intern/instance-flow-tracking/statistics/total`);
};

const getStatistics = () => {
    return axios.get(`/api/intern/instance-flow-tracking/statistics/integrations`);
};

const InstanceEventRepository = {
    getEvents,
    getLatestEvents,
    getEventsByInstanceId,
    getAllStatistics,
    getStatistics,
    manualRejectEvent,
    manualDispatchEvent,
};

export default InstanceEventRepository;
