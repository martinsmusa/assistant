#!/bin/sh

CERT_DIR="/etc/nginx/certificates"
CERT_KEY="$CERT_DIR/server.key"
CERT_CRT="$CERT_DIR/server.crt"

# Check if the certificate files already exist
if [ ! -f "$CERT_KEY" ] || [ ! -f "$CERT_CRT" ]; then
  echo "Generating self-signed certificates..."
  mkdir -p $CERT_DIR
  openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout $CERT_KEY -out $CERT_CRT -subj "/CN=localhost"
else
  echo "Certificates already exist. Skipping generation."
fi

# Start nginx
nginx -g 'daemon off;'
