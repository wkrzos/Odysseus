/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/trip/trip-stages/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["listTripStages"];
        put?: never;
        post: operations["createTripStageList"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/trip/trip-warning/{country_id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["retrieveTripWarningByCountry"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/trip/trip/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["listTrips"];
        put?: never;
        post: operations["createTrip"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/trip/trip/{id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["retrieveTrip"];
        put: operations["updateTrip"];
        post?: never;
        delete: operations["destroyTrip"];
        options?: never;
        head?: never;
        patch: operations["partialUpdateTrip"];
        trace?: never;
    };
    "/common/countries/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["listCountries"];
        put?: never;
        post: operations["createCountry"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/common/countries/{id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["retrieveCountry"];
        put: operations["updateCountry"];
        post?: never;
        delete: operations["destroyCountry"];
        options?: never;
        head?: never;
        patch: operations["partialUpdateCountry"];
        trace?: never;
    };
    "/common/address/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["listAddresses"];
        put?: never;
        post: operations["createAddress"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/common/address/{id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["retrieveAddress"];
        put: operations["updateAddress"];
        post?: never;
        delete: operations["destroyAddress"];
        options?: never;
        head?: never;
        patch: operations["partialUpdateAddress"];
        trace?: never;
    };
    "/communication/messages/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["listMessages"];
        put?: never;
        post: operations["createMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/communication/messages/with_countries/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["listWithCountriesMessage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/communication/messages/{id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["retrieveMessage"];
        put: operations["updateMessage"];
        post?: never;
        delete: operations["destroyMessage"];
        options?: never;
        head?: never;
        patch: operations["partialUpdateMessage"];
        trace?: never;
    };
    "/communication/recipients/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["listRecipients"];
        put?: never;
        post: operations["createRecipient"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/communication/recipients/{id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["retrieveRecipient"];
        put: operations["updateRecipient"];
        post?: never;
        delete: operations["destroyRecipient"];
        options?: never;
        head?: never;
        patch: operations["partialUpdateRecipient"];
        trace?: never;
    };
    "/registration/clientdata/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["listClientData"];
        put?: never;
        post: operations["createClientData"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/registration/clientdata/{id}/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["retrieveClientData"];
        put: operations["updateClientData"];
        post?: never;
        delete: operations["destroyClientData"];
        options?: never;
        head?: never;
        patch: operations["partialUpdateClientData"];
        trace?: never;
    };
    "/trip/trip-stages/report/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description POST /trip/trip-stages/report/
         *     Request body:
         *     {
         *       "startDate": "YYYY-MM-DD",
         *       "endDate": "YYYY-MM-DD",
         *       "countries": [1, 2, 3, ...]
         *     } */
        post: operations["createTripStageReport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Trip: {
            readonly id?: number;
            client_data: {
                readonly id?: number;
                address: {
                    readonly id?: number;
                    /** Format: date-time */
                    readonly created_at?: string;
                    /** Format: date-time */
                    readonly updated_at?: string;
                    street: string;
                    building_number: string;
                    apartment_number?: string | null;
                    locality: string;
                };
                resides_in: {
                    readonly id?: number;
                    code: string;
                    name: string;
                }[];
                /** Format: date-time */
                readonly created_at?: string;
                /** Format: date-time */
                readonly updated_at?: string;
                name: string;
                surname: string;
                pesel: string;
                phone_number: string;
                /** Format: email */
                email_address: string;
            };
        };
        Country: {
            readonly id?: number;
            code: string;
            name: string;
        };
        Address: {
            readonly id?: number;
            /** Format: date-time */
            readonly created_at?: string;
            /** Format: date-time */
            readonly updated_at?: string;
            street: string;
            building_number: string;
            apartment_number?: string | null;
            locality: string;
        };
        Message: {
            readonly id?: number;
            recipients: {
                readonly id?: number;
                /** @enum {string} */
                status?: "sent" | "notSent";
                phone_number: string;
            };
            /** Format: date-time */
            readonly created_at?: string;
            /** Format: date-time */
            readonly updated_at?: string;
            content: string;
            /** Format: date */
            readonly date?: string;
            author: number;
        };
        Recipient: {
            readonly id?: number;
            /** @enum {string} */
            status?: "sent" | "notSent";
            phone_number: string;
        };
        ClientData: {
            readonly id?: number;
            address: {
                readonly id?: number;
                /** Format: date-time */
                readonly created_at?: string;
                /** Format: date-time */
                readonly updated_at?: string;
                street: string;
                building_number: string;
                apartment_number?: string | null;
                locality: string;
            };
            resides_in: {
                readonly id?: number;
                code: string;
                name: string;
            }[];
            /** Format: date-time */
            readonly created_at?: string;
            /** Format: date-time */
            readonly updated_at?: string;
            name: string;
            surname: string;
            pesel: string;
            phone_number: string;
            /** Format: email */
            email_address: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    listTripStages: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown[];
                };
            };
        };
    };
    createTripStageList: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
                "application/x-www-form-urlencoded": unknown;
                "multipart/form-data": unknown;
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    retrieveTripWarningByCountry: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                country_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    listTrips: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Trip"][];
                };
            };
        };
    };
    createTrip: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Trip"];
                "application/x-www-form-urlencoded": components["schemas"]["Trip"];
                "multipart/form-data": components["schemas"]["Trip"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Trip"];
                };
            };
        };
    };
    retrieveTrip: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this trip. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Trip"];
                };
            };
        };
    };
    updateTrip: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this trip. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Trip"];
                "application/x-www-form-urlencoded": components["schemas"]["Trip"];
                "multipart/form-data": components["schemas"]["Trip"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Trip"];
                };
            };
        };
    };
    destroyTrip: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this trip. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    partialUpdateTrip: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this trip. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Trip"];
                "application/x-www-form-urlencoded": components["schemas"]["Trip"];
                "multipart/form-data": components["schemas"]["Trip"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Trip"];
                };
            };
        };
    };
    listCountries: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Country"][];
                };
            };
        };
    };
    createCountry: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Country"];
                "application/x-www-form-urlencoded": components["schemas"]["Country"];
                "multipart/form-data": components["schemas"]["Country"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Country"];
                };
            };
        };
    };
    retrieveCountry: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this country. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Country"];
                };
            };
        };
    };
    updateCountry: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this country. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Country"];
                "application/x-www-form-urlencoded": components["schemas"]["Country"];
                "multipart/form-data": components["schemas"]["Country"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Country"];
                };
            };
        };
    };
    destroyCountry: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this country. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    partialUpdateCountry: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this country. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Country"];
                "application/x-www-form-urlencoded": components["schemas"]["Country"];
                "multipart/form-data": components["schemas"]["Country"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Country"];
                };
            };
        };
    };
    listAddresses: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Address"][];
                };
            };
        };
    };
    createAddress: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Address"];
                "application/x-www-form-urlencoded": components["schemas"]["Address"];
                "multipart/form-data": components["schemas"]["Address"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Address"];
                };
            };
        };
    };
    retrieveAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this address. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Address"];
                };
            };
        };
    };
    updateAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this address. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Address"];
                "application/x-www-form-urlencoded": components["schemas"]["Address"];
                "multipart/form-data": components["schemas"]["Address"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Address"];
                };
            };
        };
    };
    destroyAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this address. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    partialUpdateAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this address. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Address"];
                "application/x-www-form-urlencoded": components["schemas"]["Address"];
                "multipart/form-data": components["schemas"]["Address"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Address"];
                };
            };
        };
    };
    listMessages: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Message"][];
                };
            };
        };
    };
    createMessage: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Message"];
                "application/x-www-form-urlencoded": components["schemas"]["Message"];
                "multipart/form-data": components["schemas"]["Message"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Message"];
                };
            };
        };
    };
    listWithCountriesMessage: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Message"];
                };
            };
        };
    };
    retrieveMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this message. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Message"];
                };
            };
        };
    };
    updateMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this message. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Message"];
                "application/x-www-form-urlencoded": components["schemas"]["Message"];
                "multipart/form-data": components["schemas"]["Message"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Message"];
                };
            };
        };
    };
    destroyMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this message. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    partialUpdateMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this message. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Message"];
                "application/x-www-form-urlencoded": components["schemas"]["Message"];
                "multipart/form-data": components["schemas"]["Message"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Message"];
                };
            };
        };
    };
    listRecipients: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Recipient"][];
                };
            };
        };
    };
    createRecipient: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Recipient"];
                "application/x-www-form-urlencoded": components["schemas"]["Recipient"];
                "multipart/form-data": components["schemas"]["Recipient"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Recipient"];
                };
            };
        };
    };
    retrieveRecipient: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this recipient. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Recipient"];
                };
            };
        };
    };
    updateRecipient: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this recipient. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Recipient"];
                "application/x-www-form-urlencoded": components["schemas"]["Recipient"];
                "multipart/form-data": components["schemas"]["Recipient"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Recipient"];
                };
            };
        };
    };
    destroyRecipient: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this recipient. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    partialUpdateRecipient: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this recipient. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Recipient"];
                "application/x-www-form-urlencoded": components["schemas"]["Recipient"];
                "multipart/form-data": components["schemas"]["Recipient"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Recipient"];
                };
            };
        };
    };
    listClientData: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientData"][];
                };
            };
        };
    };
    createClientData: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ClientData"];
                "application/x-www-form-urlencoded": components["schemas"]["ClientData"];
                "multipart/form-data": components["schemas"]["ClientData"];
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientData"];
                };
            };
        };
    };
    retrieveClientData: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this client data. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientData"];
                };
            };
        };
    };
    updateClientData: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this client data. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ClientData"];
                "application/x-www-form-urlencoded": components["schemas"]["ClientData"];
                "multipart/form-data": components["schemas"]["ClientData"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientData"];
                };
            };
        };
    };
    destroyClientData: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this client data. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    partialUpdateClientData: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description A unique integer value identifying this client data. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ClientData"];
                "application/x-www-form-urlencoded": components["schemas"]["ClientData"];
                "multipart/form-data": components["schemas"]["ClientData"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ClientData"];
                };
            };
        };
    };
    createTripStageReport: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": unknown;
                "application/x-www-form-urlencoded": unknown;
                "multipart/form-data": unknown;
            };
        };
        responses: {
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
}
