# Use a imagem Node.js como base
FROM node:20.11.0

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /api

# Copie todos os arquivos do diretório atual para o diretório de trabalho do contêiner
COPY . .

# Remova o diretório node_modules (se já existir)
RUN rm -rf node_modules 

# Instale as dependências do projeto
RUN npm install

# Execute o comando de build para compilar o código TypeScript
RUN npm run build

# Exponha a porta 3001 (se o seu aplicativo Node.js estiver escutando nessa porta)
EXPOSE 3001

# Comando para iniciar o servidor (neste exemplo, assumindo que você está usando o comando 'npm start')
CMD ["npm", "start"]