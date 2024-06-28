/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: process.env.NEXT_PUBLIC_ADMIN_URL },
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Methods", value: "GET,PUT,PATCH,OPTIONS,POST,DELETE" }, 
                    { key: "Access-Control-Max-Age", value: "86400" },
                    { key: "Access-Control-Allow-Headers", value: "Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers, Access-Control-Request-Method, Access-Control-Max-Age" },
                ]
            }
        ]
    }
}

module.exports = nextConfig
