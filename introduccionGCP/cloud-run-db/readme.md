
# Steps

Enable CloudSQLAdmin API

### Deploy Command

```bash
gcloud functions deploy prueba \
--region=southamerica-east1 \
--runtime=nodejs18 \
--source=. \
--entry-point=helloHttp \
--project=diegosucaria-edu-424301 \
--trigger-http
```

### Runtimes available:
https://cloud.google.com/functions/docs/concepts/execution-environment#runtimes