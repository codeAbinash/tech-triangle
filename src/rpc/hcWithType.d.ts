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
                            username: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                            password: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
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
                            username: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                            password: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
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
                            name: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                            username: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                            email: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
                            password: import("hono/types").ParsedFormValue | import("hono/types").ParsedFormValue[];
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
        redis: import("hono/client").ClientRequest<{
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
        redis: {
            ":key": import("hono/client").ClientRequest<{
                $get: {
                    input: {
                        param: {
                            key: string;
                        };
                    };
                    output: {
                        message: string;
                        data: any;
                    };
                    outputFormat: "json";
                    status: import("hono/utils/http-status").StatusCode;
                };
            }>;
        };
    };
} & {
    api: {
        redis: {
            ":key": {
                ":value": import("hono/client").ClientRequest<{
                    $get: {
                        input: {
                            param: {
                                key: string;
                            } & {
                                value: string;
                            };
                        };
                        output: {
                            message: string;
                            data: {
                                key: string;
                                value: string;
                            };
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
        profile: import("hono/client").ClientRequest<{
            $get: {
                input: {};
                output: {};
                outputFormat: string;
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
                            name: string;
                        } | null)[];
                        currentDevice: {
                            id: string;
                            time: number;
                            name: string;
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
