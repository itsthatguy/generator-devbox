# generator-railsbox

## Getting Started

### Download & install stuff

- Node: http://nodejs.org/download/
- Virtualbox: https://www.virtualbox.org/wiki/Downloads
- Vagrant: https://docs.vagrantup.com/v2/installation/



### Install additional stuff

```
vagrant plugin install vagrant-librarian-chef
npm install -g yo
```

### Clone this repo

```
git clone git@github.com:adorableio/generator-railsbox.git
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
