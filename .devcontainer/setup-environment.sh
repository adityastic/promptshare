#!/bin/sh

echo "Running npm install..."
npm install

ENV_FILE=".env.local"
MONGODB_URI="mongodb://localhost/?directConnection=true"

if [ ! -f "$ENV_FILE" ]; then
  echo "Creating $ENV_FILE..."
  echo "MONGODB_URI=$MONGODB_URI" > "$ENV_FILE"
else
  echo "Updating $ENV_FILE..."
  if grep -q "MONGODB_URI=" "$ENV_FILE"; then
    # Update the existing MONGODB_URI line
    sed -i "s|^MONGODB_URI=.*|MONGODB_URI=$MONGODB_URI|" "$ENV_FILE"
  else
    # Add the MONGODB_URI variable if it doesn't exist
    echo "MONGODB_URI=$MONGODB_URI" >> "$ENV_FILE"
  fi
fi

echo "$ENV_FILE setup complete."