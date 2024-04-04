import axios from "axios";
import {IEvent} from "../features/instances/types/Event";

const getEvents = (
    page: number,
    size: number,
    sortProperty: string,
    sortDirection: string
) => {
    return axios.get(`/api/intern/historikk/hendelser`, {
        params: {
            side: page,
            antall: size,
            sorteringFelt: sortProperty,
            sorteringRetning: sortDirection,
            bareSistePerInstans: false,
        },
    });
};

const getLatestEvents = (
    page: number,
    size: number,
    sortProperty: string,
    sortDirection: string
) => {
    return axios.get(`/api/intern/historikk/hendelser`, {
        params: {
            side: page,
            antall: size,
            sorteringFelt: sortProperty,
            sorteringRetning: sortDirection,
            bareSistePerInstans: true,
        },
    });
};

const getEventsByInstanceId = (
    page: number,
    size: number,
    sortProperty: string,
    sortDirection: string,
    kildeapplikasjonId?: string,
    kildeapplikasjonInstansId?: string
) => {
    return axios.get(`/api/intern/historikk/hendelser`, {
        params: {
            side: page,
            antall: size,
            sorteringFelt: sortProperty,
            sorteringRetning: sortDirection,
            kildeapplikasjonId: kildeapplikasjonId,
            kildeapplikasjonInstansId: kildeapplikasjonInstansId,
        },
    });
};

const createEvent = (data: IEvent) => {
    return axios.post(`/api/intern/historikk/hendelser`, data);
};

const getAllStatistics = () => {
    return axios.get(`/api/intern/historikk/statistikk`);
};

const getStatistics = () => {
    return axios.get(`/api/intern/historikk/statistikk/integrasjoner`);
};

const EventRepository = {
    getEvents,
    getLatestEvents,
    getEventsByInstanceId,
    getAllStatistics,
    getStatistics,
    createEvent
};

export default EventRepository;
