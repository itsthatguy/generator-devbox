# generator-railsbox

## Getting Started

### Download & install stuff

- Node: http://nodejs.org/download/
- Virtualbox: https://www.virtualbox.org/wiki/Downloads
- Vagrant: https://docs.vagrantup.com/v2/installation/



### Install additional stuff

```
vagrant plugin install vagrant-librarian-chef
vagrant plugin install vagrant-omnibus
npm install -g yo
```

### Clone this repo

```
git clone git@github.com:itsthatguy/generator-railsbox.git
```

### Link it!

We need to be able to use the generator, so make sure you link it

```
cd generator-railsbox
npm link
```


## Using the generator
*NOTE: I'm assuming you are still in the generator-railsbox directory right now.*

```
cd ..
mkdir myproject && cd $_
yo railsbox
```


## Running & Provisioning

```
vagrant up
```

## Where are my files?

### **Locally**

```
cd apps
```

## **On the Vagrant box**

```
vagrant ssh
cd railsbox
```

### Example Setup: Setting up & running rails

```
vagrant ssh
cd railsbox
sudo rails new .
rails server
```

