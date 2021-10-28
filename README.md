# Services

## Auth Service

Build docker image

```bash
docker build auth-service -t dokan/auth-service 
```

#### API Endpoints

```
/
/users
```

## Catalog Service

Build docker image

```bash
docker build catalog-service -t dokan/catalog-service
```

#### API Endpoints

```
/
/products
```

# Kubernetes

Start minikube:

```bash
minikube start
```

Tell minikube to use local docker images

```bash
eval $(minikube -p minikube docker-env)
```

1 - Create Deployment:

```bash
kubectl apply -f kube/deployment.yaml
```

2 - Create Services:

```bash
kubectl apply -f kube/services.yaml
```

3 - Create Ingress:

```bash
kubectl apply -f kube/ingress.yaml
```