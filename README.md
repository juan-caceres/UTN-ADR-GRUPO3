# UTN-ADR-GRUPO3

## Proyecto de Despliegue con Terraform y Azure

**Información Institucional**

**Facultad:** UTN-FRLP (Universidad Tecnológica Nacional - Facultad Regional La Plata)

**Materia:** ADR (Administración de Recursos)

**Grupo:** Grupo 3

## Integrantes del Grupo

- Juan Cruz Cáceres
- Brisa Bassilián
- Iara Rearte
- Francina Ruaro

## Descripción del Proyecto

El objetivo de este proyecto consiste en automatizar y desplegar una página web estática utilizando Terraform como herramienta de Infraestructura como Código (IaC) sobre la nube de Microsoft Azure.

## Despliegue paso a paso

### 1. Copiar la plantilla y cambiar storage_account_name (ejemplo: frontendejemplo debe ser unico)

Dentro de la carpeta `terraform/`:

```bash
cp terraform.tfvars.example terraform.tfvars
```

### 2. Iniciar sesión en azure

```bash
az login --use-device-code
```

### 3. Desplegar infraestructura (el .tfstate fue ignorado, para cada computadora será un proyecto nuevo. Inicializar y crean la cuenta de almacenamiento estático)

Dentro de la carpeta `terraform/`:

```bash
terraform init
terraform apply
```

## Subir archivos HTML al servidor (remplazar frontendejemplo por el nombre que pusiste en .tfvars)

Desde la raíz del repositorio:

```bash
az storage blob upload-batch \
  --account-name frontendejemplo \
  --source ../frontend \
  --destination \$web
```
###Dar de baja

```bash
terraform destroy
```