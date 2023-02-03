// noinspection DuplicatedCode


import {
    IConfigurationPatch,
    IConfiguration
} from "../../features/configuration/types/Configuration";
import {FieldType, IAVConfiguration} from "../../features/configuration/types/AVConfiguration";

export const MOCK_CONFIGURATION: IConfiguration = {
    "comment": "form to test mapping",
    "completed": false,
    "id": "123",
    "integrationId": "id0",
    "integrationMetadataId": 321,
    "mapping": {
        "elementCollectionMappingPerKey": {},
        "elementMappingPerKey": {
            "journalpost": {
                "elementCollectionMappingPerKey": {
                    "dokumentbeskrivelse": {
                        "elementMappings": [
                            {
                                "elementCollectionMappingPerKey": {
                                    "dokumentobjekt": {
                                        "elementMappings": [
                                            {
                                                "elementCollectionMappingPerKey": {},
                                                "elementMappingPerKey": {},
                                                "valueMappingPerKey": {
                                                    "fil": {
                                                        "mappingString": "$ifg{formPdf}",
                                                        "type": "FILE"
                                                    },
                                                    "filformat": {
                                                        "mappingString": "www.kodeverk.no/A",
                                                        "type": "STRING"
                                                    },
                                                    "variantformat": {
                                                        "mappingString": "www.kodeverk.no/PDF",
                                                        "type": "STRING"
                                                    }
                                                }
                                            }
                                        ],
                                        "elementsFromCollectionMappings": []
                                    }
                                },
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "dokumentType": {
                                        "mappingString": "cat8",
                                        "type": "STRING"
                                    },
                                    "dokumentstatus": {
                                        "mappingString": "D9",
                                        "type": "STRING"
                                    },
                                    "tilknyttetRegistreringSom": {
                                        "mappingString": "www.kodeverk.no/H",
                                        "type": "URL"
                                    },
                                    "tittel": {
                                        "mappingString": "record title",
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            }
                        ],
                        "elementsFromCollectionMappings": [
                            {
                                "elementMapping": {
                                    "elementCollectionMappingPerKey": {
                                        "dokumentobjekt": {
                                            "elementMappings": [
                                                {
                                                    "elementCollectionMappingPerKey": {},
                                                    "elementMappingPerKey": {},
                                                    "valueMappingPerKey": {
                                                        "fil": {
                                                            "mappingString": "$igf{file}",
                                                            "type": "DYNAMIC_STRING"
                                                        },
                                                        "filformat": {
                                                            "mappingString": "www.kodeverk.no/PDF",
                                                            "type": "DYNAMIC_STRING"
                                                        },
                                                        "variantformat": {
                                                            "mappingString": "www.kodeverk.no/PDF",
                                                            "type": "STRING"
                                                        }
                                                    }
                                                }
                                            ],
                                            "elementsFromCollectionMappings": []
                                        }
                                    },
                                    "elementMappingPerKey": {},
                                    "valueMappingPerKey": {
                                        "dokumentType": {
                                            "mappingString": "cat8",
                                            "type": "STRING"
                                        },
                                        "dokumentstatus": {
                                            "mappingString": "D9",
                                            "type": "STRING"
                                        },
                                        "tilknyttetRegistreringSom": {
                                            "mappingString": "www.kodeverk.no/V",
                                            "type": "STRING"
                                        },
                                        "tittel": {
                                            "mappingString": "$ifg{name}",
                                            "type": "DYNAMIC_STRING"
                                        }
                                    }
                                },
                                "instanceCollectionReferencesOrdered": [
                                    "$if(vedlegg)"
                                ]
                            }
                        ]
                    },
                    "korrespondansepart": {
                        "elementMappings": [
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {
                                    "adresse": {
                                        "elementCollectionMappingPerKey": {},
                                        "elementMappingPerKey": {},
                                        "valueMappingPerKey": {
                                            "adresselinje": {
                                                "mappingString": "highstreet 22",
                                                "type": "DYNAMIC_STRING"
                                            },
                                            "postnummer": {
                                                "mappingString": "1234",
                                                "type": "DYNAMIC_STRING"
                                            },
                                            "poststed": {
                                                "mappingString": "Moria",
                                                "type": "DYNAMIC_STRING"
                                            }
                                        }
                                    },
                                    "kontaktinformasjon": {
                                        "elementCollectionMappingPerKey": {},
                                        "elementMappingPerKey": {},
                                        "valueMappingPerKey": {
                                            "epostadresse": {
                                                "mappingString": "hello@world.no",
                                                "type": "DYNAMIC_STRING"
                                            },
                                            "mobiltelefonnummer": {
                                                "mappingString": "12345678",
                                                "type": "DYNAMIC_STRING"
                                            },
                                            "telefonnummer": {
                                                "mappingString": "12345678",
                                                "type": "DYNAMIC_STRING"
                                            }
                                        }
                                    },
                                    "skjerming": {
                                        "elementCollectionMappingPerKey": {},
                                        "elementMappingPerKey": {},
                                        "valueMappingPerKey": {
                                            "skjermingshjemmel": {
                                                "mappingString": "p3",
                                                "type": "STRING"
                                            },
                                            "tilgangsrestriksjon": {
                                                "mappingString": "code2",
                                                "type": "STRING"
                                            }
                                        }
                                    }
                                },
                                "valueMappingPerKey": {
                                    "fødselsnummer": {
                                        "mappingString": "123456789",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "kontaktperson": {
                                        "mappingString": "donna",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "korrespondansepartNavn": {
                                        "mappingString": "Anakin Skywalker",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "korrespondanseparttype": {
                                        "mappingString": "avsender",
                                        "type": "STRING"
                                    },
                                    "organisasjonsnummer": {
                                        "mappingString": null,
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            }
                        ],
                        "elementsFromCollectionMappings": []
                    }
                },
                "elementMappingPerKey": {
                    "skjerming": {
                        "elementCollectionMappingPerKey": {},
                        "elementMappingPerKey": {},
                        "valueMappingPerKey": {
                            "skjermingshjemmel": {
                                "mappingString": "p34",
                                "type": "STRING"
                            },
                            "tilgangsrestriksjon": {
                                "mappingString": "code89",
                                "type": "STRING"
                            }
                        }
                    }
                },
                "valueMappingPerKey": {
                    "administrativenhet": {
                        "mappingString": "unit33",
                        "type": "STRING"
                    },
                    "journalposttype": {
                        "mappingString": "A",
                        "type": "STRING"
                    },
                    "journalstatus": {
                        "mappingString": "N",
                        "type": "STRING"
                    },
                    "offentligTittel": {
                        "mappingString": "public record title",
                        "type": "DYNAMIC_STRING"
                    },
                    "saksbehandler": {
                        "mappingString": "boba",
                        "type": "STRING"
                    },
                    "tittel": {
                        "mappingString": "record title",
                        "type": "DYNAMIC_STRING"
                    }
                }
            },
            "sak": {
                "elementCollectionMappingPerKey": {
                    "klasse": {
                        "elementMappings": [
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": "1class",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": "prim",
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "0",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": "primTitle",
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            },
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": "2class",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": "rose",
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "1",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": "secTitle",
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            },
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": "3class",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": "everdeen",
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "2",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": "tertTitle",
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            }
                        ],
                        "elementsFromCollectionMappings": []
                    }
                },
                "elementMappingPerKey": {
                    "skjerming": {
                        "elementCollectionMappingPerKey": {},
                        "elementMappingPerKey": {},
                        "valueMappingPerKey": {
                            "skjermingshjemmel": {
                                "mappingString": "number6",
                                "type": "STRING"
                            },
                            "tilgangsrestriksjon": {
                                "mappingString": "code42",
                                "type": "STRING"
                            }
                        }
                    }
                },
                "valueMappingPerKey": {
                    "administrativenhet": {
                        "mappingString": "unit4",
                        "type": "STRING"
                    },
                    "arkivdel": {
                        "mappingString": "unit3",
                        "type": "STRING"
                    },
                    "id": {
                        "mappingString": null,
                        "type": "STRING"
                    },
                    "journalenhet": {
                        "mappingString": "unit0",
                        "type": "STRING"
                    },
                    "offentligTittel": {
                        "mappingString": "public title",
                        "type": "DYNAMIC_STRING"
                    },
                    "saksansvarlig": {
                        "mappingString": "rand",
                        "type": "STRING"
                    },
                    "saksmappetype": {
                        "mappingString": "casetype",
                        "type": "STRING"
                    },
                    "status": {
                        "mappingString": null,
                        "type": "STRING"
                    },
                    "tittel": {
                        "mappingString": "Title of case",
                        "type": "DYNAMIC_STRING"
                    },
                    "type": {
                        "mappingString": "NEW",
                        "type": "STRING"
                    }
                }
            }
        },
        "valueMappingPerKey": {}
    }
}

export const MOCK_CONFIGURATION_PATCH: IConfigurationPatch = {
    "comment": "form to test mapping",
    "completed": false,
    "integrationMetadataId": 321,
    "mapping": {
        "elementCollectionMappingPerKey": {},
        "elementMappingPerKey": {
            "journalpost": {
                "elementCollectionMappingPerKey": {
                    "dokumentbeskrivelse": {
                        "elementMappings": [
                            {
                                "elementCollectionMappingPerKey": {
                                    "dokumentobjekt": {
                                        "elementMappings": [
                                            {
                                                "elementCollectionMappingPerKey": {},
                                                "elementMappingPerKey": {},
                                                "valueMappingPerKey": {
                                                    "fil": {
                                                        "mappingString": "$ifg{formPdf}",
                                                        "type": "FILE"
                                                    },
                                                    "filformat": {
                                                        "mappingString": "www.kodeverk.no/A",
                                                        "type": "STRING"
                                                    },
                                                    "variantformat": {
                                                        "mappingString": "www.kodeverk.no/PDF",
                                                        "type": "STRING"
                                                    }
                                                }
                                            }
                                        ],
                                        "elementsFromCollectionMappings": []
                                    }
                                },
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "dokumentType": {
                                        "mappingString": "cat8",
                                        "type": "STRING"
                                    },
                                    "dokumentstatus": {
                                        "mappingString": "D9",
                                        "type": "STRING"
                                    },
                                    "tilknyttetRegistreringSom": {
                                        "mappingString": "www.kodeverk.no/H",
                                        "type": "URL"
                                    },
                                    "tittel": {
                                        "mappingString": "record title",
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            }
                        ],
                        "elementsFromCollectionMappings": [
                            {
                                "elementMapping": {
                                    "elementCollectionMappingPerKey": {
                                        "dokumentobjekt": {
                                            "elementMappings": [
                                                {
                                                    "elementCollectionMappingPerKey": {},
                                                    "elementMappingPerKey": {},
                                                    "valueMappingPerKey": {
                                                        "fil": {
                                                            "mappingString": "$igf{file}",
                                                            "type": "DYNAMIC_STRING"
                                                        },
                                                        "filformat": {
                                                            "mappingString": "www.kodeverk.no/PDF",
                                                            "type": "DYNAMIC_STRING"
                                                        },
                                                        "variantformat": {
                                                            "mappingString": "www.kodeverk.no/PDF",
                                                            "type": "STRING"
                                                        }
                                                    }
                                                }
                                            ],
                                            "elementsFromCollectionMappings": []
                                        }
                                    },
                                    "elementMappingPerKey": {},
                                    "valueMappingPerKey": {
                                        "dokumentType": {
                                            "mappingString": "cat8",
                                            "type": "STRING"
                                        },
                                        "dokumentstatus": {
                                            "mappingString": "D9",
                                            "type": "STRING"
                                        },
                                        "tilknyttetRegistreringSom": {
                                            "mappingString": "www.kodeverk.no/V",
                                            "type": "STRING"
                                        },
                                        "tittel": {
                                            "mappingString": "$ifg{name}",
                                            "type": "DYNAMIC_STRING"
                                        }
                                    }
                                },
                                "instanceCollectionReferencesOrdered": [
                                    "$if(vedlegg)"
                                ]
                            }
                        ]
                    },
                    "korrespondansepart": {
                        "elementMappings": [
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {
                                    "adresse": {
                                        "elementCollectionMappingPerKey": {},
                                        "elementMappingPerKey": {},
                                        "valueMappingPerKey": {
                                            "adresselinje": {
                                                "mappingString": "highstreet 22",
                                                "type": "DYNAMIC_STRING"
                                            },
                                            "postnummer": {
                                                "mappingString": "1234",
                                                "type": "DYNAMIC_STRING"
                                            },
                                            "poststed": {
                                                "mappingString": "Moria",
                                                "type": "DYNAMIC_STRING"
                                            }
                                        }
                                    },
                                    "kontaktinformasjon": {
                                        "elementCollectionMappingPerKey": {},
                                        "elementMappingPerKey": {},
                                        "valueMappingPerKey": {
                                            "epostadresse": {
                                                "mappingString": "hello@world.no",
                                                "type": "DYNAMIC_STRING"
                                            },
                                            "mobiltelefonnummer": {
                                                "mappingString": "12345678",
                                                "type": "DYNAMIC_STRING"
                                            },
                                            "telefonnummer": {
                                                "mappingString": "12345678",
                                                "type": "DYNAMIC_STRING"
                                            }
                                        }
                                    },
                                    "skjerming": {
                                        "elementCollectionMappingPerKey": {},
                                        "elementMappingPerKey": {},
                                        "valueMappingPerKey": {
                                            "skjermingshjemmel": {
                                                "mappingString": "p3",
                                                "type": "STRING"
                                            },
                                            "tilgangsrestriksjon": {
                                                "mappingString": "code2",
                                                "type": "STRING"
                                            }
                                        }
                                    }
                                },
                                "valueMappingPerKey": {
                                    "fødselsnummer": {
                                        "mappingString": "123456789",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "kontaktperson": {
                                        "mappingString": "donna",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "korrespondansepartNavn": {
                                        "mappingString": "Anakin Skywalker",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "korrespondanseparttype": {
                                        "mappingString": "avsender",
                                        "type": "STRING"
                                    },
                                    "organisasjonsnummer": {
                                        "mappingString": null,
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            }
                        ],
                        "elementsFromCollectionMappings": []
                    }
                },
                "elementMappingPerKey": {
                    "skjerming": {
                        "elementCollectionMappingPerKey": {},
                        "elementMappingPerKey": {},
                        "valueMappingPerKey": {
                            "skjermingshjemmel": {
                                "mappingString": "p34",
                                "type": "STRING"
                            },
                            "tilgangsrestriksjon": {
                                "mappingString": "code89",
                                "type": "STRING"
                            }
                        }
                    }
                },
                "valueMappingPerKey": {
                    "administrativenhet": {
                        "mappingString": "unit33",
                        "type": "STRING"
                    },
                    "journalposttype": {
                        "mappingString": "A",
                        "type": "STRING"
                    },
                    "journalstatus": {
                        "mappingString": "N",
                        "type": "STRING"
                    },
                    "offentligTittel": {
                        "mappingString": "public record title",
                        "type": "DYNAMIC_STRING"
                    },
                    "saksbehandler": {
                        "mappingString": "boba",
                        "type": "STRING"
                    },
                    "tittel": {
                        "mappingString": "record title",
                        "type": "DYNAMIC_STRING"
                    }
                }
            },
            "sak": {
                "elementCollectionMappingPerKey": {
                    "klasse": {
                        "elementMappings": [
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": "1class",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": "prim",
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "0",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": "primTitle",
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            },
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": "2class",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": "rose",
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "1",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": "secTitle",
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            },
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": "3class",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": "everdeen",
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "2",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": "tertTitle",
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            }
                        ],
                        "elementsFromCollectionMappings": []
                    }
                },
                "elementMappingPerKey": {
                    "skjerming": {
                        "elementCollectionMappingPerKey": {},
                        "elementMappingPerKey": {},
                        "valueMappingPerKey": {
                            "skjermingshjemmel": {
                                "mappingString": "number6",
                                "type": "STRING"
                            },
                            "tilgangsrestriksjon": {
                                "mappingString": "code42",
                                "type": "STRING"
                            }
                        }
                    }
                },
                "valueMappingPerKey": {
                    "administrativenhet": {
                        "mappingString": "unit4",
                        "type": "STRING"
                    },
                    "arkivdel": {
                        "mappingString": "unit3",
                        "type": "STRING"
                    },
                    "id": {
                        "mappingString": null,
                        "type": "STRING"
                    },
                    "journalenhet": {
                        "mappingString": "unit0",
                        "type": "STRING"
                    },
                    "offentligTittel": {
                        "mappingString": "public title",
                        "type": "DYNAMIC_STRING"
                    },
                    "saksansvarlig": {
                        "mappingString": "rand",
                        "type": "STRING"
                    },
                    "saksmappetype": {
                        "mappingString": "casetype",
                        "type": "STRING"
                    },
                    "status": {
                        "mappingString": null,
                        "type": "STRING"
                    },
                    "tittel": {
                        "mappingString": "Title of case",
                        "type": "DYNAMIC_STRING"
                    }
                }
            }
        },
        "valueMappingPerKey": {}
    }
}

export const MOCK_EMPTY_CONFIGURATION: IConfiguration = {
    "comment": "form to test empty mapping",
    "completed": false,
    "mapping": {
        valueMappingPerKey: {},
        elementMappingPerKey: {},
        elementCollectionMappingPerKey: {}
    },
    "id": "123",
    "integrationId": "id0",
    "integrationMetadataId": 321
}

export const MOCK_MAPPED_EMPTY_CONFIGURATION: IConfiguration = {
    "comment": "form to test empty mapping",
    "completed": false,
    "id": "234",
    "integrationId": "id1",
    "integrationMetadataId": 321,
    "mapping": {
        "elementCollectionMappingPerKey": {},
        "elementMappingPerKey": {
            "journalpost": {
                "elementCollectionMappingPerKey": {
                    "dokumentbeskrivelse": {
                        "elementMappings": [
                            {
                                "elementCollectionMappingPerKey": {
                                    "dokumentobjekt": {
                                        "elementMappings": [
                                            {
                                                "elementCollectionMappingPerKey": {},
                                                "elementMappingPerKey": {},
                                                "valueMappingPerKey": {
                                                    "fil": {
                                                        "mappingString": null,
                                                        "type": "FILE"
                                                    },
                                                    "filformat": {
                                                        "mappingString": null,
                                                        "type": "STRING"
                                                    },
                                                    "variantformat": {
                                                        "mappingString": null,
                                                        "type": "STRING"
                                                    }
                                                }
                                            }
                                        ],
                                        "elementsFromCollectionMappings": []
                                    }
                                },
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "dokumentType": {
                                        "mappingString": null,
                                        "type": "STRING"
                                    },
                                    "dokumentstatus": {
                                        "mappingString": null,
                                        "type": "STRING"
                                    },
                                    "tilknyttetRegistreringSom": {
                                        "mappingString": null,
                                        "type": "STRING"
                                    },
                                    "tittel": {
                                        "mappingString": null,
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            }
                        ],
                        "elementsFromCollectionMappings": [
                            {
                                "elementMapping": {
                                    "elementCollectionMappingPerKey": {
                                        "dokumentobjekt": {
                                            "elementMappings": [
                                                {
                                                    "elementCollectionMappingPerKey": {},
                                                    "elementMappingPerKey": {},
                                                    "valueMappingPerKey": {
                                                        "fil": {
                                                            "mappingString": null,
                                                            "type": "DYNAMIC_STRING"
                                                        },
                                                        "filformat": {
                                                            "mappingString": null,
                                                            "type": "DYNAMIC_STRING"
                                                        },
                                                        "variantformat": {
                                                            "mappingString": null,
                                                            "type": "STRING"
                                                        }
                                                    }
                                                }
                                            ],
                                            "elementsFromCollectionMappings": []
                                        }
                                    },
                                    "elementMappingPerKey": {},
                                    "valueMappingPerKey": {
                                        "dokumentType": {
                                            "mappingString": null,
                                            "type": "STRING"
                                        },
                                        "dokumentstatus": {
                                            "mappingString": null,
                                            "type": "STRING"
                                        },
                                        "tilknyttetRegistreringSom": {
                                            "mappingString": null,
                                            "type": "STRING"
                                        },
                                        "tittel": {
                                            "mappingString": null,
                                            "type": "DYNAMIC_STRING"
                                        }
                                    }
                                },
                                "instanceCollectionReferencesOrdered": [
                                    "$if(vedlegg)"
                                ]
                            }
                        ]
                    },
                    "korrespondansepart": {
                        "elementMappings": [
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {
                                    "adresse": {
                                        "elementCollectionMappingPerKey": {},
                                        "elementMappingPerKey": {},
                                        "valueMappingPerKey": {
                                            "adresselinje": {
                                                "mappingString": null,
                                                "type": "DYNAMIC_STRING"
                                            },
                                            "postnummer": {
                                                "mappingString": null,
                                                "type": "DYNAMIC_STRING"
                                            },
                                            "poststed": {
                                                "mappingString": null,
                                                "type": "DYNAMIC_STRING"
                                            }
                                        }
                                    },
                                    "kontaktinformasjon": {
                                        "elementCollectionMappingPerKey": {},
                                        "elementMappingPerKey": {},
                                        "valueMappingPerKey": {
                                            "epostadresse": {
                                                "mappingString": null,
                                                "type": "DYNAMIC_STRING"
                                            },
                                            "mobiltelefonnummer": {
                                                "mappingString": null,
                                                "type": "DYNAMIC_STRING"
                                            },
                                            "telefonnummer": {
                                                "mappingString": null,
                                                "type": "DYNAMIC_STRING"
                                            }
                                        }
                                    },
                                    "skjerming": {
                                        "elementCollectionMappingPerKey": {},
                                        "elementMappingPerKey": {},
                                        "valueMappingPerKey": {
                                            "skjermingshjemmel": {
                                                "mappingString": null,
                                                "type": "STRING"
                                            },
                                            "tilgangsrestriksjon": {
                                                "mappingString": null,
                                                "type": "STRING"
                                            }
                                        }
                                    }
                                },
                                "valueMappingPerKey": {
                                    "fødselsnummer": {
                                        "mappingString": null,
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "kontaktperson": {
                                        "mappingString": null,
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "korrespondansepartNavn": {
                                        "mappingString": null,
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "korrespondanseparttype": {
                                        "mappingString": null,
                                        "type": "STRING"
                                    },
                                    "organisasjonsnummer": {
                                        "mappingString": null,
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            }
                        ],
                        "elementsFromCollectionMappings": []
                    }
                },
                "elementMappingPerKey": {
                    "skjerming": {
                        "elementCollectionMappingPerKey": {},
                        "elementMappingPerKey": {},
                        "valueMappingPerKey": {
                            "skjermingshjemmel": {
                                "mappingString": null,
                                "type": "STRING"
                            },
                            "tilgangsrestriksjon": {
                                "mappingString": null,
                                "type": "STRING"
                            }
                        }
                    }
                },
                "valueMappingPerKey": {
                    "administrativenhet": {
                        "mappingString": null,
                        "type": "STRING"
                    },
                    "journalposttype": {
                        "mappingString": null,
                        "type": "STRING"
                    },
                    "journalstatus": {
                        "mappingString": null,
                        "type": "STRING"
                    },
                    "offentligTittel": {
                        "mappingString": null,
                        "type": "DYNAMIC_STRING"
                    },
                    "saksbehandler": {
                        "mappingString": null,
                        "type": "STRING"
                    },
                    "tittel": {
                        "mappingString": null,
                        "type": "DYNAMIC_STRING"
                    }
                }
            },
            "sak": {
                "elementCollectionMappingPerKey": {
                    "klasse": {
                        "elementMappings": [
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": null,
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": null,
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "0",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": null,
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            },
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": null,
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": null,
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "1",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": null,
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            },
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": null,
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": null,
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "2",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": null,
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            }
                        ],
                        "elementsFromCollectionMappings": []
                    }
                },
                "elementMappingPerKey": {
                    "skjerming": {
                        "elementCollectionMappingPerKey": {},
                        "elementMappingPerKey": {},
                        "valueMappingPerKey": {
                            "skjermingshjemmel": {
                                "mappingString": null,
                                "type": "STRING"
                            },
                            "tilgangsrestriksjon": {
                                "mappingString": null,
                                "type": "STRING"
                            }
                        }
                    }
                },
                "valueMappingPerKey": {
                    "administrativenhet": {
                        "mappingString": null,
                        "type": "STRING"
                    },
                    "arkivdel": {
                        "mappingString": null,
                        "type": "STRING"
                    },
                    "journalenhet": {
                        "mappingString": null,
                        "type": "STRING"
                    },
                    "offentligTittel": {
                        "mappingString": null,
                        "type": "DYNAMIC_STRING"
                    },
                    "saksansvarlig": {
                        "mappingString": null,
                        "type": "STRING"
                    },
                    "saksmappetype": {
                        "mappingString": null,
                        "type": "STRING"
                    },
                    "status": {
                        "mappingString": null,
                        "type": "STRING"
                    },
                    "tittel": {
                        "mappingString": null,
                        "type": "DYNAMIC_STRING"
                    },
                    "type": {
                        "mappingString": "NEW",
                        "type": "STRING"
                    }
                }
            }
        },
        "valueMappingPerKey": {}
    }
}

export const MOCK_NEW_CONFIG: IConfiguration = {
    id: 'id2',
    integrationId: '123',
    version: 3,
    completed: false,
    comment: 'Ikke ferdigstilt',
    mapping: {
        valueMappingPerKey: {},
        elementMappingPerKey: {
            "sak": {
                valueMappingPerKey: {
                    "type": {type: FieldType.STRING, mappingString: "NEW"},
                    "id": {type: FieldType.STRING, mappingString: "2022/123"},
                    "tittel": {type: FieldType.DYNAMIC_STRING, mappingString: "Title of case"},
                    "offentligTittel": {type: FieldType.DYNAMIC_STRING, mappingString: "public title"},
                    "saksmappetype": {type: FieldType.STRING, mappingString: "casetype"},
                    "administrativenhet": {type: FieldType.STRING, mappingString: "unit4"},
                    "arkivdel": {type: FieldType.STRING, mappingString: "unit3"},
                    "journalenhet": {type: FieldType.STRING, mappingString: "unit0"},
                    "status": {type: FieldType.STRING, mappingString: null},
                    "saksansvarlig": {type: FieldType.STRING, mappingString: "rand"},
                },
                elementMappingPerKey: {
                    "skjerming": {
                        elementCollectionMappingPerKey: {},
                        elementMappingPerKey: {},
                        valueMappingPerKey: {
                            "tilgangsrestriksjon": {type: FieldType.STRING, mappingString: "code42"},
                            "skjermingshjemmel": {type: FieldType.STRING, mappingString: "number6"},
                        }
                    }
                },
                elementCollectionMappingPerKey: {
                    "klasse": {
                        "elementMappings": [
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": "1class",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": "prim",
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "0",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": "primTitle",
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            },
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": "2class",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": "rose",
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "1",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": "secTitle",
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            },
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": "3class",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": "everdeen",
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "2",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": "tertTitle",
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            }
                        ],
                        "elementsFromCollectionMappings": []
                    }
                },
            },
            "journalpost": {
                valueMappingPerKey: {
                    "tittel": {type: FieldType.DYNAMIC_STRING, mappingString: "record title"},
                    "offentligTittel": {type: FieldType.DYNAMIC_STRING, mappingString: "public record title"},
                    "administrativenhet": {type: FieldType.STRING, mappingString: "unit33"},
                    "journalstatus": {type: FieldType.STRING, mappingString: "N"},
                    "journalposttype": {type: FieldType.STRING, mappingString: "A"},
                    "saksbehandler": {type: FieldType.STRING, mappingString: "boba"}
                },
                elementMappingPerKey: {
                    "skjerming": {
                        elementMappingPerKey: {},
                        elementCollectionMappingPerKey: {},
                        valueMappingPerKey: {
                            "tilgangsrestriksjon": {type: FieldType.STRING, mappingString: "code89"},
                            "skjermingshjemmel": {type: FieldType.STRING, mappingString: "p34"}
                        }
                    }
                },
                elementCollectionMappingPerKey: {
                    "dokumentbeskrivelse": {
                        elementMappings: [
                            {
                                valueMappingPerKey: {
                                    "tittel": {type: FieldType.DYNAMIC_STRING, mappingString: "record title"},
                                    "dokumentstatus": {type: FieldType.STRING, mappingString: "D9"},
                                    "dokumentType": {type: FieldType.STRING, mappingString: "cat8"},
                                    "tilknyttetRegistreringSom": {type: FieldType.URL, mappingString: "www.kodeverk.no/H"}
                                },
                                elementMappingPerKey: {},
                                elementCollectionMappingPerKey: {
                                    "dokumentobjekt": {
                                        elementMappings: [
                                            {
                                                valueMappingPerKey: {
                                                    "filformat": {type: FieldType.STRING, mappingString: "www.kodeverk.no/A"},
                                                    "variantformat": {type: FieldType.STRING, mappingString: "www.kodeverk.no/PDF"},
                                                    "fil": {type: FieldType.FILE, mappingString: "$ifg{formPdf}"}
                                                },
                                                elementMappingPerKey: {},
                                                elementCollectionMappingPerKey: {}
                                            }
                                        ],
                                        elementsFromCollectionMappings: [
                                        ]
                                    }
                                }
                            }
                        ],
                        elementsFromCollectionMappings: [
                            {
                                instanceCollectionReferencesOrdered: ["$if(vedlegg)"],
                                elementMapping: {
                                    valueMappingPerKey: {
                                        "tittel": {type: FieldType.DYNAMIC_STRING, mappingString: "$ifg{name}"},
                                        "dokumentstatus": {type: FieldType.STRING, mappingString: "D9"},
                                        "dokumentType": {type: FieldType.STRING, mappingString: "cat8"},
                                        "tilknyttetRegistreringSom": {type: FieldType.STRING, mappingString: "www.kodeverk.no/V"}
                                    },
                                    elementMappingPerKey: {},
                                    elementCollectionMappingPerKey: {
                                        "dokumentobjekt": {
                                            elementMappings: [
                                                {
                                                    valueMappingPerKey: {
                                                        "filformat": {type: FieldType.DYNAMIC_STRING, mappingString: "www.kodeverk.no/PDF"},
                                                        "variantformat": {type: FieldType.STRING, mappingString: "www.kodeverk.no/PDF"},
                                                        "fil": {type: FieldType.DYNAMIC_STRING, mappingString: "$igf{file}"}
                                                    },
                                                    elementMappingPerKey: {},
                                                    elementCollectionMappingPerKey: {}
                                                }
                                            ],
                                            elementsFromCollectionMappings: []
                                        }
                                    }
                                }
                            }
                        ]

                    },
                    "korrespondansepart": {
                        elementMappings: [{
                            valueMappingPerKey: {
                                "fødselsnummer": {type: FieldType.DYNAMIC_STRING, mappingString: "123456789"},
                                "organisasjonsnummer": {type: FieldType.DYNAMIC_STRING, mappingString: null},
                                "kontaktperson": {type: FieldType.DYNAMIC_STRING, mappingString: "donna"},
                                "korrespondansepartNavn": {type: FieldType.DYNAMIC_STRING, mappingString: "Anakin Skywalker"},
                                "korrespondanseparttype": {type: FieldType.STRING, mappingString: "avsender"}
                            },
                            elementMappingPerKey: {
                                "adresse": {
                                    valueMappingPerKey: {
                                        "adresselinje": {type: FieldType.DYNAMIC_STRING, mappingString: "highstreet 22"},
                                        "postnummer": {type: FieldType.DYNAMIC_STRING, mappingString: "1234"},
                                        "poststed": {type: FieldType.DYNAMIC_STRING, mappingString: "Moria"}
                                    },
                                    elementMappingPerKey: {},
                                    elementCollectionMappingPerKey: {}
                                },
                                "kontaktinformasjon": {
                                    valueMappingPerKey: {
                                        "epostadresse": {type: FieldType.DYNAMIC_STRING, mappingString: "hello@world.no"},
                                        "mobiltelefonnummer": {type: FieldType.DYNAMIC_STRING, mappingString: "12345678"},
                                        "telefonnummer": {type: FieldType.DYNAMIC_STRING, mappingString: "12345678"}
                                    },
                                    elementMappingPerKey: {},
                                    elementCollectionMappingPerKey: {}
                                },
                                "skjerming": {
                                    valueMappingPerKey: {
                                        "tilgangsrestriksjon": {type: FieldType.STRING, mappingString: "code2"},
                                        "skjermingshjemmel": {type: FieldType.STRING, mappingString: "p3"}
                                    },
                                    elementMappingPerKey: {},
                                    elementCollectionMappingPerKey: {}
                                }
                            },
                            elementCollectionMappingPerKey: {}
                        }],
                        elementsFromCollectionMappings: []
                    }
                }
            }
        },
        elementCollectionMappingPerKey: {}
    },
}

export const MOCK_BY_ID_CONFIG: IConfiguration = {
    id: 'id2',
    integrationId: '123',
    version: 3,
    completed: false,
    comment: 'Ikke ferdigstilt',
    mapping: {
        valueMappingPerKey: {},
        elementMappingPerKey: {
            "sak": {
                valueMappingPerKey: {
                    "id": {type: FieldType.STRING, mappingString: "2022/163"},
                    "type": {type: FieldType.STRING, mappingString: "BY_ID"},
                    "tittel": {type: FieldType.DYNAMIC_STRING, mappingString: null},
                    "offentligTittel": {type: FieldType.DYNAMIC_STRING, mappingString: null},
                    "saksmappetype": {type: FieldType.STRING, mappingString: null},
                    "administrativenhet": {type: FieldType.STRING, mappingString: null},
                    "arkivdel": {type: FieldType.STRING, mappingString: null},
                    "journalenhet": {type: FieldType.STRING, mappingString: null},
                    "status": {type: FieldType.STRING, mappingString: null},
                    "saksansvarlig": {type: FieldType.STRING, mappingString: null}
                },
                elementMappingPerKey: {
                    "skjerming": {
                        "elementCollectionMappingPerKey": {},
                        "elementMappingPerKey": {},
                        "valueMappingPerKey": {
                            "tilgangsrestriksjon": {type: FieldType.STRING, mappingString: null},
                            "skjermingshjemmel": {type: FieldType.STRING, mappingString: null}
                        }
                    }
                },
                elementCollectionMappingPerKey: {
                    "klasse": {
                        "elementMappings": [
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": null,
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": null,
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "0",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": null,
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            },
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": null,
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": null,
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "1",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": null,
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            },
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": null,
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": null,
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "2",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": null,
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            }
                        ],
                        "elementsFromCollectionMappings": []
                    }
                },            },
            "journalpost": {
                valueMappingPerKey: {
                    "tittel": {type: FieldType.DYNAMIC_STRING, mappingString: "foo $if{bar}"},
                    "offentligTittel": {type: FieldType.DYNAMIC_STRING, mappingString: null},
                    "administrativenhet": {type: FieldType.STRING, mappingString: null},
                    "journalstatus": {type: FieldType.STRING, mappingString: null},
                    "journalposttype": {type: FieldType.STRING, mappingString: null},
                    "saksbehandler": {type: FieldType.STRING, mappingString: null},
                    "tilgangsrestriksjon": {type: FieldType.STRING, mappingString: null},
                    "skjermingshjemmel": {type: FieldType.STRING, mappingString: null}
                },
                elementMappingPerKey: {},
                elementCollectionMappingPerKey: {
                    "dokumentbeskrivelse": {
                        elementMappings: [
                            {
                                valueMappingPerKey: {
                                    "tittel": {type: FieldType.DYNAMIC_STRING, mappingString: "foo $if{bar}"},
                                    "dokumentstatus": {type: FieldType.STRING, mappingString: null},
                                    "dokumentType": {type: FieldType.STRING, mappingString: null},
                                    "tilknyttetRegistreringSom": {type: FieldType.URL, mappingString: null}
                                },
                                elementMappingPerKey: {},
                                elementCollectionMappingPerKey: {
                                    "dokumentobjekt": {
                                        elementMappings: [
                                            {
                                                valueMappingPerKey: {
                                                    "filformat": {type: FieldType.STRING, mappingString: null},
                                                    "variantformat": {type: FieldType.STRING, mappingString: null},
                                                    "fil": {type: FieldType.FILE, mappingString: null}
                                                },
                                                elementMappingPerKey: {},
                                                elementCollectionMappingPerKey: {}
                                            }
                                        ],
                                        elementsFromCollectionMappings: [
                                        ]
                                    }
                                }
                            }
                        ],
                        elementsFromCollectionMappings: [
                            {
                                instanceCollectionReferencesOrdered: ["$if(vedlegg)"],
                                elementMapping: {
                                    valueMappingPerKey: {
                                        "tittel": {type: FieldType.DYNAMIC_STRING, mappingString: null},
                                        "dokumentstatus": {type: FieldType.STRING, mappingString: null},
                                        "dokumentType": {type: FieldType.STRING, mappingString: null},
                                        "tilknyttetRegistreringSom": {type: FieldType.STRING, mappingString: null}
                                    },
                                    elementMappingPerKey: {},
                                    elementCollectionMappingPerKey: {
                                        "dokumentobjekt": {
                                            elementMappings: [
                                                {
                                                    valueMappingPerKey: {
                                                        "filformat": {type: FieldType.DYNAMIC_STRING, mappingString: null},
                                                        "variantformat": {type: FieldType.STRING, mappingString: null},
                                                        "fil": {type: FieldType.DYNAMIC_STRING, mappingString: null}
                                                    },
                                                    elementMappingPerKey: {},
                                                    elementCollectionMappingPerKey: {}
                                                }
                                            ],
                                            elementsFromCollectionMappings: []
                                        }
                                    }
                                }
                            }
                        ]

                    },
                    "korrespondansepart": {
                        elementMappings: [{
                            valueMappingPerKey: {
                                "fødselsnummer": {type: FieldType.DYNAMIC_STRING, mappingString: null},
                                "organisasjonsnummer": {type: FieldType.DYNAMIC_STRING, mappingString: null},
                                "kontaktperson": {type: FieldType.DYNAMIC_STRING, mappingString: null},
                                "korrespondansepartNavn": {type: FieldType.DYNAMIC_STRING, mappingString: null},
                                "korrespondanseparttype": {type: FieldType.STRING, mappingString: null}
                            },
                            elementMappingPerKey: {
                                "adresse": {
                                    valueMappingPerKey: {
                                        "adresselinje": {type: FieldType.DYNAMIC_STRING, mappingString: null},
                                        "postnummer": {type: FieldType.DYNAMIC_STRING, mappingString: null},
                                        "poststed": {type: FieldType.DYNAMIC_STRING, mappingString: null}
                                    },
                                    elementMappingPerKey: {},
                                    elementCollectionMappingPerKey: {}
                                },
                                "kontaktinformasjon": {
                                    valueMappingPerKey: {
                                        "epostadresse": {type: FieldType.DYNAMIC_STRING, mappingString: null},
                                        "mobiltelefonnummer": {type: FieldType.DYNAMIC_STRING, mappingString: null},
                                        "telefonnummer": {type: FieldType.DYNAMIC_STRING, mappingString: null}
                                    },
                                    elementMappingPerKey: {},
                                    elementCollectionMappingPerKey: {}
                                },
                                "skjerming": {
                                    valueMappingPerKey: {
                                        "tilgangsrestriksjon": {type: FieldType.STRING, mappingString: null},
                                        "skjermingshjemmel": {type: FieldType.STRING, mappingString: null}
                                    },
                                    elementMappingPerKey: {},
                                    elementCollectionMappingPerKey: {}
                                }
                            },
                            elementCollectionMappingPerKey: {}
                        }],
                        elementsFromCollectionMappings: []
                    }
                }
            }
        },
        elementCollectionMappingPerKey: {}
    },

}

export const MOCK_AV_CONFIGURATION_NEW: IAVConfiguration = {
    comment: "form to test mapping",
    completed: false,
    id: "234",
    integrationId: "id1",
    integrationMetadataId: 321,
    mapping: {
        valueMappingPerKey: {},
        elementMappingPerKey: {
            "sak": {
                valueMappingPerKey: {
                    "type": {type: FieldType.STRING, mappingString: "NEW"},
                    "tittel": {type: FieldType.DYNAMIC_STRING, mappingString: "Title of case"},
                    "offentligTittel": {type: FieldType.DYNAMIC_STRING, mappingString: "public title"},
                    "saksmappetype": {type: FieldType.STRING, mappingString: "casetype"},
                    "administrativenhet": {type: FieldType.STRING, mappingString: "unit4"},
                    "arkivdel": {type: FieldType.STRING, mappingString: "unit3"},
                    "journalenhet": {type: FieldType.STRING, mappingString: "unit0"},
                    "status": {type: FieldType.STRING, mappingString: null},
                    "saksansvarlig": {type: FieldType.STRING, mappingString: "rand"},
                },
                elementMappingPerKey: {
                    "skjerming": {
                        "elementCollectionMappingPerKey": {},
                        "elementMappingPerKey": {},
                        "valueMappingPerKey": {
                            "tilgangsrestriksjon": {type: FieldType.STRING, mappingString: "code42"},
                            "skjermingshjemmel": {type: FieldType.STRING, mappingString: "number6"}
                        }
                    }
                },
                elementCollectionMappingPerKey: {
                    "klasse": {
                        "elementMappings": [
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": "1class",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": "prim",
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "0",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": "primTitle",
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            },
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": "2class",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": "rose",
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "1",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": "secTitle",
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            },
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": "3class",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": "everdeen",
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "2",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": "tertTitle",
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            }
                        ],
                        "elementsFromCollectionMappings": []
                    }
                },
            },
            "journalpost": {
                valueMappingPerKey: {
                    "tittel": {type: FieldType.DYNAMIC_STRING, mappingString: "record title"},
                    "offentligTittel": {type: FieldType.DYNAMIC_STRING, mappingString: "public record title"},
                    "administrativenhet": {type: FieldType.STRING, mappingString: "unit33"},
                    "journalstatus": {type: FieldType.STRING, mappingString: "N"},
                    "journalposttype": {type: FieldType.STRING, mappingString: "A"},
                    "saksbehandler": {type: FieldType.STRING, mappingString: "boba"}
                },
                elementMappingPerKey: {
                    "skjerming": {
                        elementCollectionMappingPerKey: {},
                        elementMappingPerKey: {},
                        valueMappingPerKey: {
                            "tilgangsrestriksjon": {type: FieldType.STRING, mappingString: "code89"},
                            "skjermingshjemmel": {type: FieldType.STRING, mappingString: "p34"},
                        }
                    }
                },
                elementCollectionMappingPerKey: {
                    "dokumentbeskrivelse": {
                        elementMappings: [
                            {
                                valueMappingPerKey: {
                                    "tittel": {type: FieldType.DYNAMIC_STRING, mappingString: "record title"},
                                    "dokumentstatus": {type: FieldType.STRING, mappingString: "D9"},
                                    "dokumentType": {type: FieldType.STRING, mappingString: "cat8"},
                                    "tilknyttetRegistreringSom": {type: FieldType.STRING, mappingString: "www.kodeverk.no/H"}
                                },
                                elementMappingPerKey: {},
                                elementCollectionMappingPerKey: {
                                    "dokumentobjekt": {
                                        elementMappings: [
                                            {
                                                valueMappingPerKey: {
                                                    "filformat": {type: FieldType.STRING, mappingString: "www.kodeverk.no/A"},
                                                    "variantformat": {type: FieldType.STRING, mappingString: "www.kodeverk.no/PDF"},
                                                    "fil": {type: FieldType.FILE, mappingString: "$ifg{formPdf}"}
                                                },
                                                elementMappingPerKey: {},
                                                elementCollectionMappingPerKey: {}
                                            }
                                        ],
                                        elementsFromCollectionMappings: [
                                        ]
                                    }
                                }
                            }
                        ],
                        elementsFromCollectionMappings: [
                            {
                                instanceCollectionReferencesOrdered: ["$if(vedlegg)"],
                                elementMapping: {
                                    valueMappingPerKey: {
                                        "tittel": {type: FieldType.DYNAMIC_STRING, mappingString: "$ifg{name}"},
                                        "dokumentstatus": {type: FieldType.STRING, mappingString: "D9"},
                                        "dokumentType": {type: FieldType.STRING, mappingString: "cat8"},
                                        "tilknyttetRegistreringSom": {type: FieldType.STRING, mappingString: "www.kodeverk.no/V"}
                                    },
                                    elementMappingPerKey: {},
                                    elementCollectionMappingPerKey: {
                                        "dokumentobjekt": {
                                            elementMappings: [
                                                {
                                                    valueMappingPerKey: {
                                                        "filformat": {type: FieldType.DYNAMIC_STRING, mappingString: "www.kodeverk.no/PDF"},
                                                        "variantformat": {type: FieldType.STRING, mappingString: "www.kodeverk.no/PDF"},
                                                        "fil": {type: FieldType.DYNAMIC_STRING, mappingString: "$igf{file}"}
                                                    },
                                                    elementMappingPerKey: {},
                                                    elementCollectionMappingPerKey: {}
                                                }
                                            ],
                                            elementsFromCollectionMappings: []
                                        }
                                    }
                                }
                            }
                        ]

                    },
                    "korrespondansepart": {
                        elementMappings: [{
                            valueMappingPerKey: {
                                "fødselsnummer": {type: FieldType.DYNAMIC_STRING, mappingString: "123456789"},
                                "organisasjonsnummer": {type: FieldType.DYNAMIC_STRING, mappingString: null},
                                "kontaktperson": {type: FieldType.DYNAMIC_STRING, mappingString: "donna"},
                                "korrespondansepartNavn": {type: FieldType.DYNAMIC_STRING, mappingString: "Anakin Skywalker"},
                                "korrespondanseparttype": {type: FieldType.STRING, mappingString: "avsender"}
                            },
                            elementMappingPerKey: {
                                "adresse": {
                                    valueMappingPerKey: {
                                        "adresselinje": {type: FieldType.DYNAMIC_STRING, mappingString: "highstreet 22"},
                                        "postnummer": {type: FieldType.DYNAMIC_STRING, mappingString: "1234"},
                                        "poststed": {type: FieldType.DYNAMIC_STRING, mappingString: "Moria"}
                                    },
                                    elementMappingPerKey: {},
                                    elementCollectionMappingPerKey: {}
                                },
                                "kontaktinformasjon": {
                                    valueMappingPerKey: {
                                        "epostadresse": {type: FieldType.DYNAMIC_STRING, mappingString: "hello@world.no"},
                                        "mobiltelefonnummer": {type: FieldType.DYNAMIC_STRING, mappingString: "12345678"},
                                        "telefonnummer": {type: FieldType.DYNAMIC_STRING, mappingString: "12345678"}
                                    },
                                    elementMappingPerKey: {},
                                    elementCollectionMappingPerKey: {}
                                },
                                "skjerming": {
                                    valueMappingPerKey: {
                                        "tilgangsrestriksjon": {type: FieldType.STRING, mappingString: "code2"},
                                        "skjermingshjemmel": {type: FieldType.STRING, mappingString: "p3"}
                                    },
                                    elementMappingPerKey: {},
                                    elementCollectionMappingPerKey: {}
                                }
                            },
                            elementCollectionMappingPerKey: {}
                        }],
                        elementsFromCollectionMappings: []
                    }
                }
            }
        },
        elementCollectionMappingPerKey: {}
    }
}

export const MOCK_AV_CONFIGURATION_NEW_NOT_SHIELDED: IAVConfiguration = {
    comment: "form to test mapping",
    completed: false,
    id: "234",
    integrationId: "id1",
    integrationMetadataId: 321,
    mapping: {
        valueMappingPerKey: {},
        elementMappingPerKey: {
            "sak": {
                valueMappingPerKey: {
                    "type": {type: FieldType.STRING, mappingString: "NEW"},
                    "tittel": {type: FieldType.DYNAMIC_STRING, mappingString: "Title of case"},
                    "offentligTittel": {type: FieldType.DYNAMIC_STRING, mappingString: "public title"},
                    "saksmappetype": {type: FieldType.STRING, mappingString: "casetype"},
                    "administrativenhet": {type: FieldType.STRING, mappingString: "unit4"},
                    "arkivdel": {type: FieldType.STRING, mappingString: "unit3"},
                    "journalenhet": {type: FieldType.STRING, mappingString: "unit0"},
                    "status": {type: FieldType.STRING, mappingString: null},
                    "saksansvarlig": {type: FieldType.STRING, mappingString: "rand"},
                },
                elementMappingPerKey: {
                    "skjerming": {
                        elementCollectionMappingPerKey: {},
                        elementMappingPerKey: {},
                        valueMappingPerKey: {
                            "tilgangsrestriksjon": {type: FieldType.STRING, mappingString: "code42"},
                            "skjermingshjemmel": {type: FieldType.STRING, mappingString: "number6"},
                        }
                    }
                },
                elementCollectionMappingPerKey: {
                    "klasse": {
                        "elementMappings": [
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": "1class",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": "prim",
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "0",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": "primTitle",
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            },
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": "2class",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": "rose",
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "1",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": "secTitle",
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            },
                            {
                                "elementCollectionMappingPerKey": {},
                                "elementMappingPerKey": {},
                                "valueMappingPerKey": {
                                    "klasseId": {
                                        "mappingString": "3class",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "klassifikasjonssystem": {
                                        "mappingString": "everdeen",
                                        "type": "STRING"
                                    },
                                    "rekkefølge": {
                                        "mappingString": "2",
                                        "type": "DYNAMIC_STRING"
                                    },
                                    "tittel": {
                                        "mappingString": "tertTitle",
                                        "type": "DYNAMIC_STRING"
                                    }
                                }
                            }
                        ],
                        "elementsFromCollectionMappings": []
                    }
                }
            },
            "journalpost": {
                valueMappingPerKey: {
                    "tittel": {type: FieldType.DYNAMIC_STRING, mappingString: "record title"},
                    "offentligTittel": {type: FieldType.DYNAMIC_STRING, mappingString: "public record title"},
                    "administrativenhet": {type: FieldType.STRING, mappingString: "unit33"},
                    "journalstatus": {type: FieldType.STRING, mappingString: "N"},
                    "journalposttype": {type: FieldType.STRING, mappingString: "A"},
                    "saksbehandler": {type: FieldType.STRING, mappingString: "boba"},
                },
                elementMappingPerKey: {
                    "skjerming": {
                        elementMappingPerKey: {},
                        elementCollectionMappingPerKey: {},
                        valueMappingPerKey: {
                            "tilgangsrestriksjon": {type: FieldType.STRING, mappingString: "code89"},
                            "skjermingshjemmel": {type: FieldType.STRING, mappingString: "p34"}

                        }
                    }
                },
                elementCollectionMappingPerKey: {
                    "dokumentbeskrivelse": {
                        elementMappings: [
                            {
                                valueMappingPerKey: {
                                    "tittel": {type: FieldType.DYNAMIC_STRING, mappingString: "record title"},
                                    "dokumentstatus": {type: FieldType.STRING, mappingString: "D9"},
                                    "dokumentType": {type: FieldType.STRING, mappingString: "cat8"},
                                    "tilknyttetRegistreringSom": {type: FieldType.STRING, mappingString: "www.kodeverk.no/H"}
                                },
                                elementMappingPerKey: {},
                                elementCollectionMappingPerKey: {
                                    "dokumentobjekt": {
                                        elementMappings: [
                                            {
                                                valueMappingPerKey: {
                                                    "filformat": {type: FieldType.STRING, mappingString: "www.kodeverk.no/A"},
                                                    "variantformat": {type: FieldType.STRING, mappingString: "www.kodeverk.no/PDF"},
                                                    "fil": {type: FieldType.FILE, mappingString: "$ifg{formPdf}"}
                                                },
                                                elementMappingPerKey: {},
                                                elementCollectionMappingPerKey: {}
                                            }
                                        ],
                                        elementsFromCollectionMappings: [
                                        ]
                                    }
                                }
                            }
                        ],
                        elementsFromCollectionMappings: [
                            {
                                instanceCollectionReferencesOrdered: ["$if(vedlegg)"],
                                elementMapping: {
                                    valueMappingPerKey: {
                                        "tittel": {type: FieldType.DYNAMIC_STRING, mappingString: "$ifg{name}"},
                                        "dokumentstatus": {type: FieldType.STRING, mappingString: "D9"},
                                        "dokumentType": {type: FieldType.STRING, mappingString: "cat8"},
                                        "tilknyttetRegistreringSom": {type: FieldType.STRING, mappingString: "www.kodeverk.no/V"}
                                    },
                                    elementMappingPerKey: {},
                                    elementCollectionMappingPerKey: {
                                        "dokumentobjekt": {
                                            elementMappings: [
                                                {
                                                    valueMappingPerKey: {
                                                        "filformat": {type: FieldType.DYNAMIC_STRING, mappingString: "www.kodeverk.no/PDF"},
                                                        "variantformat": {type: FieldType.STRING, mappingString: "www.kodeverk.no/PDF"},
                                                        "fil": {type: FieldType.DYNAMIC_STRING, mappingString: "$igf{file}"}
                                                    },
                                                    elementMappingPerKey: {},
                                                    elementCollectionMappingPerKey: {}
                                                }
                                            ],
                                            elementsFromCollectionMappings: []
                                        }
                                    }
                                }
                            }
                        ]

                    },
                    "korrespondansepart": {
                        elementMappings: [{
                            valueMappingPerKey: {
                                "fødselsnummer": {type: FieldType.DYNAMIC_STRING, mappingString: "123456789"},
                                "organisasjonsnummer": {type: FieldType.DYNAMIC_STRING, mappingString: null},
                                "kontaktperson": {type: FieldType.DYNAMIC_STRING, mappingString: "donna"},
                                "korrespondansepartNavn": {type: FieldType.DYNAMIC_STRING, mappingString: "Anakin Skywalker"},
                                "korrespondanseparttype": {type: FieldType.STRING, mappingString: "avsender"}
                            },
                            elementMappingPerKey: {
                                "adresse": {
                                    valueMappingPerKey: {
                                        "adresselinje": {type: FieldType.DYNAMIC_STRING, mappingString: "highstreet 22"},
                                        "postnummer": {type: FieldType.DYNAMIC_STRING, mappingString: "1234"},
                                        "poststed": {type: FieldType.DYNAMIC_STRING, mappingString: "Moria"}
                                    },
                                    elementMappingPerKey: {},
                                    elementCollectionMappingPerKey: {}
                                },
                                "kontaktinformasjon": {
                                    valueMappingPerKey: {
                                        "epostadresse": {type: FieldType.DYNAMIC_STRING, mappingString: "hello@world.no"},
                                        "mobiltelefonnummer": {type: FieldType.DYNAMIC_STRING, mappingString: "12345678"},
                                        "telefonnummer": {type: FieldType.DYNAMIC_STRING, mappingString: "12345678"}
                                    },
                                    elementMappingPerKey: {},
                                    elementCollectionMappingPerKey: {}
                                },
                                "skjerming": {
                                    valueMappingPerKey: {},
                                    elementMappingPerKey: {},
                                    elementCollectionMappingPerKey: {}
                                }
                            },
                            elementCollectionMappingPerKey: {}
                        }],
                        elementsFromCollectionMappings: []
                    }
                }
            }
        },
        elementCollectionMappingPerKey: {}
    }
}
