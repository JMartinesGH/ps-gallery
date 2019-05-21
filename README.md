# \<ps-gallery\>

Programming Test for PS

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create builds of your application in the `build/` directory, optimized to be served in production. You can then serve the built versions by giving `polymer serve` a folder to serve from:

```
$ polymer serve build/default
```

## If I had more time and patience
1. proper pagination using [hot-ajax-paging](https://www.webcomponents.org/element/mercmobily/hot-ajax-paging) - didn't use becuase it's meant for polymer 2 and required additional elements to do the pagination
2. sort by ascending and descending
3. figure out how to filter by tag, need to get my head around data-binding a bit
4. write better optimized javascript and incorporate more events with Polymer
5. write smaller elements to limit the scope to the proper elements

