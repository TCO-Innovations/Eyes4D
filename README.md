# Eyes4D
Repository for eyes4D dashboard project


## Step 1: Connect to your server via SSH
The first thing to do is to connect to your VPS via SSH as a user with root privileges or a root user. 
    `ssh root@SERVER_IP_ADDRESS -p PORT_NUMBER`

## Step 2: Update your server OS packages
Once logged in, you can update your Ubuntu OS packages to the latest version using: 
    `sudo apt update && sudo apt upgrade`

## Step 3: Install a Web Server
To install Nginx web server, run the following command on your server: 
    `sudo apt install nginx`

## Step 4: Start Web Server
After installing nginx, use the command below to start the Apache service: 
    `systemctl start nginx`

## Step 5: Enable Web Server
You can enable Apache server to always startup when the server boots up:
    `systemctl enable nginx`

## Step 6: Check the status of the web server service
You can always check the status of the Apache web service with this command: 
    `systemctl status nginx`

## Step 7: Install Ondřej Surý’s PPA repository
Run the following command 
    `LC_ALL=C.UTF-8 add-apt-repository ppa:ondrej/php`

## Step 8: Install PHP 7.3
Run the following command
    `sudo apt install php7.3 php7.3-cli php7.3-common`

## Step 9: To check if PHP 7.3 is installed on your server
Use the command below to check if php have been installed successfully
    `php -v`

## Step 10: Install the most frequently used PHP modules
User the following command:
    `sudo apt install php7.3-fpm php7.3-json php7.3-pdo php7.3-zip php7.3-gd php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json`

## Step 11: Install git
Use the following command: 
    `sudo apt install git`

## Step 12: Download Composer
Run the following command to download composer 
    `curl -sS https://getcomposer.org/installer |php`

## Step 13: Configure composer to work globally
Move the Composer file to /usr/local/bin directory: 
    `sudo mv composer.phar /usr/local/bin/composer`

## Step 14: Install Postgres Database
Run the following command 
    `sudo apt install postgresql postgresql-contrib`

## Step 15: Putting the code to the repository

## Step 16: Cloning repository to the server
We need to SSH into our server, navigate to the folder prepared for the project, and launch git clone command.

## Step 17: Create .env file
Create new .env file under root directory of the project by using the following command: 
    `touch .env`

## Step 18: Writeable folders.
After installing project, you may need to configure some permissions. Directories within the storage and the bootstrap/cache directories should be writable by your web server or Laravel will not run. 
    `chmod -R 755 storage `
    `chmod -R 755 bootstrap/cache`

## Step 19: Composer install.
Let’s run this “magic” command under root directory of the project. 
    `composer install`

## Step 20: Initialize configuration 
The open .env file then paste the following code to it.
```dotenv
    APP_NAME=Eyes4D
    APP_ENV=production
    APP_KEY=
    APP_DEBUG=false
    APP_URL=http://eyes4D.co.tz
    
    LOG_CHANNEL=stack
    
    DB_CONNECTION=postgres
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=
    DB_USERNAME=
    DB_PASSWORD=
    
    BROADCAST_DRIVER=log
    CACHE_DRIVER=file
    QUEUE_CONNECTION=sync
    SESSION_DRIVER=file
    SESSION_LIFETIME=120
    
    REDIS_HOST=127.0.0.1
    REDIS_PASSWORD=null
    REDIS_PORT=6379
    
    MAIL_DRIVER=smtp
    MAIL_HOST=smtp.mailtrap.io
    MAIL_PORT=2525
    MAIL_USERNAME=null
    MAIL_PASSWORD=null
    MAIL_ENCRYPTION=null
    
    AWS_ACCESS_KEY_ID=
    AWS_SECRET_ACCESS_KEY=
    AWS_DEFAULT_REGION=us-east-1
    AWS_BUCKET=
    
    PUSHER_APP_ID=
    PUSHER_APP_KEY=
    PUSHER_APP_SECRET=
    PUSHER_APP_CLUSTER=mt1
    
    MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
    MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```

## Step 21: Generate application key.
We need to run this command under project root directory
    `php artisan key:generate`

## Step 22: Configure Nginx
Under site-enable/default file put the following code
```nginx
server {

    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www/eyes4d/public;

    index index.html index.php index.htm index.nginx-debian.html;

    charset utf-8;

    server_name _;

    location / {

        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {

        include snippets/fastcgi-php.conf;

        fastcgi_index index.php;

        fastcgi_pass unix:/var/run/php/php7.3-fpm.sock;

        fastcgi_pass 127.0.0.1:9000;

        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
    }

    location ~ /\.ht {
        deny all;
    }

    location ~ /.well-known {
        allow all;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```
## Step 23: Import Database
Import database that come with with project eyes4d_postgres.sql located under the root directory
