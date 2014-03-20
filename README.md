# generator-devbox

This is Dolores, she is the real creator of this devbox. I am but a vessel through which her ideas travel. The fact that she lives in a small mountain range nestled amongst the peaks of my hypothalamus is irrelevant. All thanks and credit belongs to her.

![Dolores](http://i.imgur.com/2gLHPmt.png)


## What is it?

With just a few simple commands you can have a fully provisioned ubuntu virtualbox installed with Ruby, rbenv Rails, Nodejs, MySQL and Postgres. Built specifically to run on all your OSesssess -- Windows, Mac, Linux, no problem!

Something go terribly terribly wrong on the virtualbox that you can't figure out? No problem, delete the box and start all over, your projects will remain fully intact.


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
git clone git@github.com:itsthatguy/generator-devbox.git
```

### Link it!

We need to be able to use the generator, so make sure you use the following commands to link it

```
cd generator-devbox
npm link
```


## Using the generator
*NOTE: I'm assuming you are still in the generator-devbox directory right now.*

```
cd ..
mkdir myproject && cd $_
yo devbox
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

### **On the Vagrant box**

```
vagrant ssh
cd apps
```

### Example Setup: Setting up & running rails

```
vagrant ssh
cd apps
sudo rails new myproject
cd myproject
rails server
```


## FAQ

Q: You’ve named part of your brain?
A: No, dolores lives in there.

