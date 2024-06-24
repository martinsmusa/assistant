# Use the official Nginx base image
FROM nginx:alpine

# Install openssl
RUN apk add --no-cache openssl

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the certificate generation script
COPY generate_certs.sh /generate_certs.sh

# Ensure the script has execute permissions
RUN chmod +x /generate_certs.sh

# Set the entry point to the certificate generation script
ENTRYPOINT ["/generate_certs.sh"]