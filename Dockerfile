# # Use the official Node.js image as the base image
# FROM node

# # Set the working directory in the container
# WORKDIR /app

# # # Copy package.json and package-lock.json to the container
# COPY package*.json ./

# # # Install application dependencies
# # RUN npm install

# RUN npm install

# # Copy the rest of the application source code to the container
# COPY . .

# EXPOSE 3000

# # Define the command to start your Node.js application
# CMD [ "npm","start" ]
# FROM node

# WORKDIR /app

# COPY . .

# EXPOSE 3000

# RUN npm install

# CMD ("npm" "start")
FROM node

WORKDIR /app

# Copy package.json and package-lock.json separately
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your application will listen on
EXPOSE 3000

# Specify the command to start your Node.js application
CMD ["npm", "start"]
