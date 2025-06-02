import { hc } from 'hono/client';
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
                        features: any;
                        versionCode: any;
                        criticalVersionCode: any;
                        size: any;
                        id: any;
                    };
                };
                outputFormat: "json";
                status: import("hono/utils/http-status").ContentfulStatusCode;
            } | {
                input: {};
                output: {
                    message: string;
                    status: boolean;
                    data: null;
                };
                outputFormat: "json";
                status: import("hono/utils/http-status").ContentfulStatusCode;
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
                            password: string;
                            username: string;
                            deviceName: string;
                            deviceOs: string;
                        };
                    };
                    output: {
                        message: string;
                        status: boolean;
                        verificationRequired: boolean;
                        data: null;
                    };
                    outputFormat: "json";
                    status: import("hono/utils/http-status").ContentfulStatusCode;
                } | {
                    input: {
                        form: {
                            password: string;
                            username: string;
                            deviceName: string;
                            deviceOs: string;
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
                    status: import("hono/utils/http-status").ContentfulStatusCode;
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
                            password: string;
                            name: string;
                            username: string;
                            email: string;
                        };
                    };
                    output: {
                        message: string;
                        status: boolean;
                    };
                    outputFormat: "json";
                    status: import("hono/utils/http-status").ContentfulStatusCode;
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
                            username: string;
                            otp: string;
                        };
                    };
                    output: {
                        message: string;
                        status: boolean;
                    };
                    outputFormat: "json";
                    status: import("hono/utils/http-status").ContentfulStatusCode;
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
                                username: string;
                            };
                        };
                        output: {
                            status: boolean;
                            message: string;
                            username: string;
                        };
                        outputFormat: "json";
                        status: import("hono/utils/http-status").ContentfulStatusCode;
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
                status: import("hono/utils/http-status").ContentfulStatusCode;
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
                status: import("hono/utils/http-status").ContentfulStatusCode;
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
                status: import("hono/utils/http-status").ContentfulStatusCode;
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
                            device: string;
                        };
                    };
                    output: {
                        status: boolean;
                        message: string;
                    };
                    outputFormat: "json";
                    status: import("hono/utils/http-status").ContentfulStatusCode;
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
                        status: import("hono/utils/http-status").ContentfulStatusCode;
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
                        status: import("hono/utils/http-status").ContentfulStatusCode;
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
                            data: {
                                _id: string;
                                name: string;
                                username: string;
                                email: string;
                                password: string;
                                isAdmin: boolean;
                                otp: string;
                                lastOtpSent: string;
                                otpAttempts: number;
                                resendOtpCount: number;
                                lastResendOtp: null;
                                isVerified: boolean;
                                isBanned: boolean;
                                __v: number;
                            }[];
                        };
                        outputFormat: "json";
                        status: import("hono/utils/http-status").ContentfulStatusCode;
                    };
                }>;
            };
        };
    };
} & {
    api: {
        admin: {
            users: {
                delete: import("hono/client").ClientRequest<{
                    $post: {
                        input: {
                            form: {
                                id: string;
                            };
                        };
                        output: {
                            message: string;
                            status: boolean;
                        };
                        outputFormat: "json";
                        status: import("hono/utils/http-status").ContentfulStatusCode;
                    };
                }>;
            };
        };
    };
} & {
    api: {
        admin: {
            updateVersion: import("hono/client").ClientRequest<{
                $post: {
                    input: {
                        json: {
                            version: string;
                            versionCode: number;
                            features: string[];
                            criticalVersionCode: number;
                            updateSize: string;
                        };
                    };
                    output: {
                        message: string;
                        status: boolean;
                        data: any;
                    };
                    outputFormat: "json";
                    status: import("hono/utils/http-status").ContentfulStatusCode;
                };
            }>;
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
                status: import("hono/utils/http-status").ContentfulStatusCode;
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
            status: import("hono/utils/http-status").ContentfulStatusCode;
        };
    }>;
};
export type Client = typeof client;
export declare const hcWithType: (...args: Parameters<typeof hc>) => Client;
export default hcWithType;
