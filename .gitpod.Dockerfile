FROM gitpod/workspace-full-vnc

# Instalação do Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

# Instalação do MySQL
RUN sudo apt-get install mysql-server -y

# Instalação do Sequelize CLI globalmente
RUN npm install -g sequelize-cli
