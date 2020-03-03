# Steps to deploy eyes4d project

## Reference Material
- [Nginx Configuration](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-laravel-with-lemp-on-ubuntu-18-04#step-5-%E2%80%94-setting-up-nginx)
- [Postgres Configuration](https://computingforgeeks.com/install-postgresql-12-on-ubuntu/)
- [PHP Configuration](https://www.rosehosting.com/blog/how-to-install-php-7-3-on-ubuntu-16-04/)

##### Update OS
- `apt update && apt upgrade`

##### Install Nginx
- `apt install nginx`

##### Create virtual host at sites-available
- `sudo nano /etc/nginx/sites-available/eyes4d`

##### Activate the new virtual host configuration file, create a symbolic link to 
- `sudo ln -s /etc/nginx/sites-available/eyes4d /etc/nginx/sites-enabled/`

##### To confirm that the configuration doesnt contain any syntax errors, you can use:
- `sudo nginx -t`

##### Then go to /etc/nginx/sites-available/default file remove (comment out) default flag and add it to new virtual host file
- [Laravel Nginx configurations stub](https://laravel.com/docs/6.x/deployment)

##### To apply the changes, reload Nginx with:
- `sudo systemctl reload nginx`

##### Install PHP
- `LC_ALL=C.UTF-8 add-apt-repository ppa:ondrej/php`
- `apt install php7.3 php7.3-cli php7.3-common`
- `apt install php7.3-bcmath php7.3-curl php7.3-fpm php7.3-gd php7.3-mbstring php7.3-xml php7.3-zip php7.3-pgsql`

##### Install GIT
- `apt install git`

##### Install Composer
- `apt install composer`

##### Install Postgres
- `sudo apt update`
- `sudo apt -y install vim bash-completion wget`
- `sudo apt -y upgrade`
- `wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -`
- `echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" |sudo tee  /etc/apt/sources.list.d/pgdg.list`
- `apt -y install postgresql-12 postgresql-client-12`

##### The PostgreSQL service is started and set to come up after every system reboot.
- `systemctl status postgresql.service` 

##### Clone project
- `git clone https://github.com/TCO-Innovations/Eyes4D.git eyes4d`
- `cd eyes4d`

##### Install laravel project dependencies
- `composer install`

##### Setup configuration environment variables
- `cp .env.example .env`

##### Give permission
- `sudo chown -R www-data.www-data /var/www/eyes4d/storage`
- `sudo chown -R www-data.www-data /var/www/eyes4d/bootstrap/cache`

##### Database creation and Configurations 
- `postgres=# CREATE DATABASE eyes4d;`
- `postgres=# CREATE USER {user_name} WITH ENCRYPTED PASSWORD ‘{password}’`;
- `postgres=# GRANT ALL PRIVILEGES ON DATABASE {database_name} TO {user_name}`;

##### Remote Connection 
- https://computingforgeeks.com/install-postgresql-12-on-ubuntu/
- https://blog.bigbinary.com/2016/01/23/configure-postgresql-to-allow-remote-connection.html
- https://dba.stackexchange.com/questions/83984/connect-to-postgresql-server-fatal-no-pg-hba-conf-entry-for-host
