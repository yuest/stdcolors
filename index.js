#!/usr/bin/env node
require('colors')
var spawn = require('child_process').spawn
  , command = process.argv[2]
  , args = process.argv.slice(3)
  , child = spawn(command, args, { cwd: process.cwd(), env: process.env })
child.stdout.setEncoding('utf8')
child.stderr.setEncoding('utf8')
child.stdout.on('data', function(data) {
  process.stdout.write(data)
})
child.stderr.on('data', function(data) {
  process.stderr.write(data.red)
})
child.on('exit', function(code) {
  process.exit(code)
})
