## minJs

* `desc`: Whether mini js files.
* `type`: `bool`
* `default`: `false`
* `since`: `v0.0.1`

## minJsOptions

* `desc`: Options to min js files.
* `see`: [gulp-uglify](https://github.com/terinjokes/gulp-uglify)
* `type`: `map`
* `default`: `{}`
* `since`: `v0.3.0`

## minCss

* `desc`: Whether mini css files.
* `type`: `bool`
* `default`: `false`
* `since`: `v0.0.1`

## minCssOptions

* `desc`: Options to min css files.
* `see`: [gulp-csso](https://github.com/ben-eb/gulp-csso)
* `type`: `map`
* `default`: `{comments: false}`
* `since`: `v0.3.0`

## minHtml

* `desc`: Whether mini html files.
* `type`: `bool`
* `default`: `false`
* `since`: `v0.0.1`

## minHtmlOptions

* `desc`: Options to min html files.
* `see`: [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin)
* `type`: `map`
* `since`: `v0.3.0`
* `default`: 

```
{
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    minifyJS: false,
    minifyCSS: true
}
```

## htmlReplace

* `desc`: Html replacement.
* `type`: `map`
* `default`: Empty
* `since`: `v0.0.1`
* `example`:

```
{
    // string/regexp -> replacement
}
```

## htmlInsert

* `desc`: Html insertion.
* `type`: `map`
* `default`: Empty
* `since`: `v0.0.1`
* `example`:

```
{
    // start of document
    // start: "",

    // end of document
    // end: ""
}
```

## htmlExtension

* `desc`: Convert html file to other extension file, such as `jsp, php, asp`.
* `type`: `string`
* `default`: Empty
* `since`: `v0.0.1`

## recordFileChanges

* `desc`: Whether record file changes, thus next time only handle changed files.
* `type`: `bool`
* `default`: `true`
* `since`: `v0.0.1`

## directoriesToSync

* `desc`: Other directories to sync to server.
* `type`: `map`
* `default`: Empty
* `since`: `v0.0.1`
* `note`: `base, common` is system reserved keyword, so you should not use one of them.
* `example`:

```
{
    // key -> path(relative to basePaths.webRoot)
    // images: "images",
    // fonts: "fonts"
}
```

## moduleGroup

* `desc`: If you always handle some multiple modules, you can make those modules as a group, and next time just input the groupName instead of those modules when build. 
* `type`: `map`
* `default`: Empty
* `since`: `v0.0.1`
* `note`: `groupName` should not be conflicting with existed moduleName.
* `example`:

```
moduleGroup: {
    // groupName -> modules[array]
    group1: [
        "test/index",
        "test/index2"
        // ...
    ]
}
```

## renameHtml

* `desc`: Rename html after building.
* `bg`: Sometimes, some html have to be renamed, include path, especially when the server side requires another different html file.
* `type`: `map`
* `default`: Empty
* `since`: `v0.0.6`
* `example`:

```
{
    // origin: dist/html/test/index.html -> ultimate: dist/html/other/inner/index.html
    'test/index': 'other/inner/index'
}
```



## backupHtml

* `desc`: Whether backup html(or converted files from html) after each building.
* `type`: `bool`
* `default`: `false`
* `since`: `v0.0.1`

## staticServerUrl

* `desc`: Base static server url when place static files elsewhere.
* `type`: `string`
* `default`: Empty
* `since`: `v0.2.0`
* `example`:
    - `/sub_dir`: The same server with `web`, but in a `sub_dir`.
    - `http://www.static.com`: Standalone static server.
    - `https://www.static.com/sub_dir`: Sub dir of a standalone static server.
    - `//www.static.com/sub_dir/sub_sub_dir`: Another sub dir of a standalone static server.

##  splitJs

* `bg`: Normally, all js files will be built into one big file.
* `desc`: Indicates how to split one big js file into many smaller js files.
* `type`: `map`
* `default`: Empty
* `since`: `v0.1.0`
* `note`: Normally, this always be configured in `custom config`(`config.js` under workspace) of each module.
* `example`:

```
{
    lib: ['jquery', 'react', 'react-dom'],
    common: ['common/file1', 'common/file2'],
    base: ['base/file1', 'base/file2']
}
```

Above will generate extra 3 js files apart from main js file, thus html will like:

```
<script src="/path/to/lib.js"></script>
<script src="/path/to/common.js"></script>
<script src="/path/to/fill.js"></script>
<script src="/path/to/main.js"></script>
```

## servers

Remote servers config.

See [Project config - servers](./servers.md).

* `since`: `v0.3.0`