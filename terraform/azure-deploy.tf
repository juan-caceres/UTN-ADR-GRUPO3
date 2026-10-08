# 1. Configuración del Proveedor
terraform {
  required_version = ">= 1.5"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
}
provider "azurerm" {
  features {
    resource_group {
      prevent_deletion_if_contains_resources = false
    }
  }
}

# 2. Variables (se definen en el archivo de cada integrante)
variable "resource_group_name" {
  description = "Nombre del grupo de recursos"
  type        = string
}
variable "storage_account_name" {
  description = "Nombre único de la cuenta de almacenamiento"
  type        = string

  validation {
    condition     = can(regex("^[a-z0-9]{3,24}$", var.storage_account_name))
    error_message = "El nombre de la cuenta de almacenamiento debe tener entre 3 y 24 caracteres y usar solo minúsculas y números."
  }
}

# 3. Recursos a crear
resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = "eastus2"
}

resource "azurerm_storage_account" "storage" {
  name                     = var.storage_account_name
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"

  static_website {
    index_document = "index.html"
  }
}

# 4. Output: La URL final
output "website_url" {
  value = azurerm_storage_account.storage.primary_web_endpoint
}