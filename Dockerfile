# Use the official Node.js image as a base
FROM node:18.16.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose a port for your application
EXPOSE 5000

# Start your application
CMD ["npm", "start"]
