FROM node:20-alpine3.18

WORKDIR /app

# Copy the package.json and package-lock.json files into the image.
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 5173

# The CMD instruction sets the command to be executed when running a container from an image.
# Run the application.
CMD npm run dev