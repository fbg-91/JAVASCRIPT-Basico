import * as operaciones from './controller.js'
import chalk from 'chalk'

const newFunction = operaciones.multiplica(operaciones.suma(1, 2), operaciones.suma(4, 5))

console.log(chalk.green(newFunction))