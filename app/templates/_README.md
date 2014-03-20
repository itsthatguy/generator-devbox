# Devbox

## Running & Provisioning

```
vagrant up
```

## Where are my files?

### **Locally**

```
cd apps
```

### **On the Vagrant box**

```
vagrant ssh
cd apps
```

### Example: Setting up & running your first rails project

```
vagrant ssh
cd apps
sudo rails new myproject
cd myproject
rails server
```
