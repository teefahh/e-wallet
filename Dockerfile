# FROM node:alpine

# WORKDIR /usr/src/app

# COPY . /usr/src/app

# RUN npm install -g @angular/cli

# RUN npm install

# EXPOSE 4200

# CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]

# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app


# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build

# Stage 2: Serve app with nginx server
FROM nginx:latest

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist /usr/share/nginx/html

# Expose port 4200
EXPOSE 4200

# Run nginx
CMD ["nginx", "-g", "daemon off;"]

# gcloud builds submit --tag gcr.io/arctic-cyclist-398917/d2l-clone 
# gcloud run deploy --image gcr.io/arctic-cyclist-398917/d2l-clone --port 4200

# docker build -t gcr.io/sunny-vehicle-436819-f5/e-wallet-fe:latest . && docker push gcr.io/sunny-vehicle-436819-f5/e-wallet-fe:latest
# docker run -p 8080:4200 gcr.io/sunny-vehicle-436819-f5/e-wallet-fe:latest
# docker push gcr.io/sunny-vehicle-436819-f5/e-wallet-fe:latest

# docker build -t gcr.io/sunny-vehicle-436819-f5/e-wallet-fe:latest . && docker run -p 4200:4200 gcr.io/sunny-vehicle-436819-f5/e-wallet-fe:latest