# researchPrj


change value of "proxy" in client/package.json to server IP address with port 5000


change line 52 of server.js to 
app.listen(port, '0.0.0.0', () => console.log(`Server Running on Port ${port}`));
