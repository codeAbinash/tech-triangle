declare const client: {
    api: {
        version: import("hono/client").ClientRequest<{
            $get: {
                input: {};
                output: {
                    message: string;
                    status: boolean;
                    data: {
                        version: any;
                        date: any;
                        forceUpdate: any;
                        features: any;
                    };
                };
                outputFormat: "json";
                status: import("hono/utils/http-status").StatusCode;
            } | {
                input: {};
                output: {
                    message: string;
                    status: boolean;
                    data: null;
                };
                outputFormat: "json";
                status: import("hono/utils/http-status").StatusCode;
            };
        }>;
    };
} & {
    api: {
        auth: {
            login: import("hono/client").ClientRequest<{
                $post: {
                    input: {
                        form: {
                            password: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                            username: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                            deviceName: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                            deviceOs: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                        };
                    };
                    output: {
                        message: string;
                        status: boolean;
                        verificationRequired: boolean;
                        data: null;
                    };
                    outputFormat: "json";
                    status: import("hono/utils/http-status").StatusCode;
                } | {
                    input: {
                        form: {
                            password: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                            username: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                            deviceName: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                            deviceOs: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                        };
                    };
                    output: {
                        message: string;
                        status: boolean;
                        data: {
                            token: string;
                        };
                        verificationRequired: boolean;
                    };
                    outputFormat: "json";
                    status: import("hono/utils/http-status").StatusCode;
                };
            }>;
        };
    };
} & {
    api: {
        auth: {
            signup: import("hono/client").ClientRequest<{
                $post: {
                    input: {
                        form: {
                            password: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                            name: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                            username: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                            email: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                        };
                    };
                    output: {
                        message: string;
                        status: boolean;
                    };
                    outputFormat: "json";
                    status: import("hono/utils/http-status").StatusCode;
                };
            }>;
        };
    };
} & {
    api: {
        auth: {
            verify: import("hono/client").ClientRequest<{
                $post: {
                    input: {
                        form: {
                            username: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                            otp: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                        };
                    };
                    output: {
                        message: string;
                        status: boolean;
                    };
                    outputFormat: "json";
                    status: import("hono/utils/http-status").StatusCode;
                };
            }>;
        };
    };
} & {
    api: {
        auth: {
            username: {
                status: import("hono/client").ClientRequest<{
                    $post: {
                        input: {
                            form: {
                                username: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                            };
                        };
                        output: {
                            status: boolean;
                            message: string;
                            username: string;
                        };
                        outputFormat: "json";
                        status: import("hono/utils/http-status").StatusCode;
                    };
                }>;
            };
        };
    };
} & {
    api: {
        changelog: import("hono/client").ClientRequest<{
            $get: {
                input: {};
                output: {
                    message: string;
                    status: boolean;
                };
                outputFormat: "json";
                status: import("hono/utils/http-status").StatusCode;
            };
        }>;
    };
} & {
    api: {
        profile: import("hono/client").ClientRequest<{
            $get: {
                input: {};
                output: {
                    status: boolean;
                    data: {
                        name: string;
                        email: string;
                        isAdmin: boolean;
                    };
                };
                outputFormat: "json";
                status: import("hono/utils/http-status").StatusCode;
            };
        }>;
    };
} & {
    api: {
        devices: import("hono/client").ClientRequest<{
            $get: {
                input: {};
                output: {
                    status: boolean;
                    data: {
                        devices: ({
                            id: string;
                            time: number;
                            name: string | null | undefined;
                            os: string | null | undefined;
                        } | null)[];
                        currentDevice: {
                            id: string;
                            time: number;
                            name: string | null | undefined;
                            os: string | null | undefined;
                        } | null;
                    };
                };
                outputFormat: "json";
                status: import("hono/utils/http-status").StatusCode;
            };
        }>;
    };
} & {
    api: {
        devices: {
            delete: import("hono/client").ClientRequest<{
                $post: {
                    input: {
                        form: {
                            device: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                        };
                    };
                    output: {
                        status: boolean;
                        message: string;
                    };
                    outputFormat: "json";
                    status: import("hono/utils/http-status").StatusCode;
                };
            }>;
        };
    };
} & {
    api: {
        devices: {
            delete: {
                allOther: import("hono/client").ClientRequest<{
                    $post: {
                        input: {};
                        output: {
                            status: boolean;
                            message: string;
                        };
                        outputFormat: "json";
                        status: import("hono/utils/http-status").StatusCode;
                    };
                }>;
            };
        };
    };
} & {
    api: {
        devices: {
            delete: {
                all: import("hono/client").ClientRequest<{
                    $post: {
                        input: {};
                        output: {
                            status: boolean;
                            message: string;
                        };
                        outputFormat: "json";
                        status: import("hono/utils/http-status").StatusCode;
                    };
                }>;
            };
        };
    };
} & {
    api: {
        admin: {
            users: {
                all: import("hono/client").ClientRequest<{
                    $post: {
                        input: {};
                        output: {
                            message: string;
                            status: boolean;
                            data: null;
                        };
                        outputFormat: "json";
                        status: import("hono/utils/http-status").StatusCode;
                    } | {
                        input: {};
                        output: {
                            message: string;
                            status: boolean;
                            data: {
                                name: string;
                                email: string;
                            }[];
                        };
                        outputFormat: "json";
                        status: import("hono/utils/http-status").StatusCode;
                    };
                }>;
            };
        };
    };
} & {
    api: {
        logout: import("hono/client").ClientRequest<{
            $post: {
                input: {};
                output: {
                    message: string;
                    status: boolean;
                };
                outputFormat: "json";
                status: import("hono/utils/http-status").StatusCode;
            };
        }>;
    };
} & {
    api: import("hono/client").ClientRequest<{
        $get: {
            input: {};
            output: {
                message: string;
                status: boolean;
            };
            outputFormat: "json";
            status: import("hono/utils/http-status").StatusCode;
        };
    }>;
};
export type Client = typeof client;
export declare const hcWithType: (baseUrl: string, options?: import("hono").ClientRequestOptions | undefined) => Client;
export default hcWithType;
