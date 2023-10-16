1) Goto /Buyer_frontend and run "npm install"
2) To start the frontend -> Goto /Buyer_frontend and run "npm start"
3) To start the backend -> docker_compose up -d --build dnk_backend-application
4) To start Prometheus and grafana ->
	>> docker-compose up -d prometheus
	>> docker-compose up -d grafana
	>> docker-compose up -d grafana-dashboards