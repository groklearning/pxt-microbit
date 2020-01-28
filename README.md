# Grok micro:bit fork

G'day welcome to our fork of microsoft/pxt-microbit.

Mostly, this is pretty much the same as the official one, so not much to see here.

We use this to statically package up pxt-microbit for use inside a course. We use this, rather than the official microbit.makecode.org so that we avoid being dependent on a moving target, and so we can control privacy, cookies etc. We want a static version so we only need to serve static assets.

To run locally use:

```
npm run start
```

Then you can access MakeCode at `localhost:3232/local/index.html`. `local` is there to match the use of a deploy path on prod. This task needs to be run each time you make a change. Which is slow, but is necessary so that we emulate prod.

The main big difference between our version and the official service is that we are missing APIs for adding packages from github and compiling packages. To solve this we do the following:

1. For an author to add a package, they must first build it on their machine, and then import it using MakeCode by selecting "Upload a package". This way the package is stored in the workspace.

2. Any new libraries need to be pre-built and added to our folder of built packages. This folder is `built_hexfiles` and must be manually updated. It is copied into the `built/packaged/hexcache` directory to be statically served.

3. To obtain a built hexfile load up makecode locally on your machine, load in a workspace that is dependent on the package you want to build, then click the download hex button. MakeCode will make a request to the microsoft API and grab the file. Use the inspector to obtain this file and save it into the `built_hexfiles` directory.


# micro:bit target for PXT

[![Build Status](https://travis-ci.org/microsoft/pxt-microbit.svg?branch=master)](https://travis-ci.org/microsoft/pxt-microbit)

pxt-microbit is a [Microsoft Programming Experience Toolkit (PXT)](https://github.com/Microsoft/pxt) target that allows you to program a [BBC micro:bit](https://microbit.org/). 
* pxt-microbit ``v2.*`` requires pxt v5.x, which is currently in the [master branch of pxt](https://github.com/Microsoft/pxt/tree/master).
* pxt-microbit ``v1.*`` requires pxt v4.4, which is currently in the [stable4.4 branch of pxt](https://github.com/Microsoft/pxt/tree/stable4.4).
* pxt-microbit ``v0.*`` is in the [v0 branch of this repository](https://github.com/microsoft/pxt-microbit/tree/v0)

* [Try it live](https://makecode.microbit.org/)

## Issue tracking

Please add an issue if you discover an (unreported) bug.

## Developing new extensions

Authoring and testing of new extensions can be done directly from the web editor. See [our documentation](https://makecode.com/blog/github-packages) on how to get started. If you want to run the editor locally, keep reading.

## Local server

The local server lets you to run the editor and serve the documentation from your own computer. It is meant for a single developer used and not designed to serve the editor to a large amount of users.

### Developer Setup

This is the typical setup used by the MakeCode team to work on the microbit.

1. Install [Node.js](https://nodejs.org/) 8.9.4 or higher.
2. Install [Docker](https://www.docker.com/get-started) if you plan to build ``.cpp`` files.
3. Clone the pxt repository.
```
git clone https://github.com/microsoft/pxt
cd pxt
```
4. Install the dependencies of pxt and build it
```
npm install
npm run build
cd ..
```
5. Clone the pxt-common-packages repository
```
git clone https://github.com/microsoft/pxt-common-packages
cd pxt-common-packages
npm install
cd ..
```
6. Clone this repository.
```
git clone https://github.com/microsoft/pxt-microbit
cd pxt-microbit
```
7. Install the PXT command line (add `sudo` for Mac/Linux shells).
```
npm install -g pxt
```
8. Install the pxt-microbit dependencies.
```
npm install
```
8. Link pxt-microbit back to base pxt repo (add `sudo` for Mac/Linux shells). 
This step is only required if you intend to make changes to pxt and/or 
pxt-common-packages repos. If all you want is serve a local Makecode, you can skip
this step.
```
npm link ../pxt
npm link ../pxt-common-packages
```
Note the above command assumes the folder structure of   
```
       makecode
          |
  ----------------------------------
  |       |                        |
 pxt      pxt-common-packages  pxt-microbit
 ```

### Running

Run this command from inside pxt-microbit to open a local web server
```
pxt serve
```
If the local server opens in the wrong browser, make sure to copy the URL containing the local token. 
Otherwise, the editor will not be able to load the projects.

If you need to modify the `.cpp` files (and have installed yotta), enable yotta compilation using the `--localbuild` flag:
```
pxt serve --local
```

If you want to speed up the build, you can use the ``rebundle`` option, which skips building and simply refreshes the target information
```
pxt serve --rebundle
```

### Cleaning

Sometimes, your built folder might be in a bad state, clean it and try again.
```
pxt clean
```

### Updates

Make sure to pull changes from all repos regularly. More instructions are at https://github.com/Microsoft/pxt#running-a-target-from-localhost

## Repos 

The pxt-microbit target depends on several other repos. The main ones are:
- https://github.com/Microsoft/pxt, the PXT framework
- https://github.com/Microsoft/pxt-common-packages, common APIs accross various MakeCode editors
- https://github.com/lancaster-university/microbit, basic wrapper around the DAL
- https://github.com/lancaster-university/microbit-dal

## History

See the [MakeCode blog](https://makecode.com/blog).

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

MICROSOFT, the Microsoft Logo, and MAKECODE are registered trademarks of Microsoft Corporation. They can only be used for the purposes described in and in accordance with Microsoft’s Trademark and Brand guidelines published at https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general.aspx. If the use is not covered in Microsoft’s published guidelines or you are not sure, please consult your legal counsel or MakeCode team (makecode@microsoft.com).
