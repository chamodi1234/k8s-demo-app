# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Set proper permissions for OpenShift's default non-root user
RUN chown -R 1001:0 /app && chmod -R g+rw /app

# Switch to non-root user
USER 1001

# Expose the development port
EXPOSE 3000

# Start the app in development mode
CMD ["npm", "run", "dev"]
