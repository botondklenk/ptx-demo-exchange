# Use the official Node.js image as the base image
FROM node:lts

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Ensure necessary permissions
RUN chown -R node:node /usr/src/app

# Command to run the application
CMD ["sh", "-c", "npm run build && npm run start"]