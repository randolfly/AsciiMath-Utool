/*
 * @Author: randolf 1665718426@qq.com
 * @Date: 2024-04-24 16:40:52
 * @LastEditors: randolf
 * @LastEditTime: 2024-04-24 18:34:06
 * @FilePath: \AsciiMathPlugin\preload.js
 * @Description:
 *
 */

const { AsciiMath } = require("asciimath-parser");

const cfg = {
  /**
   * @default true
   * enable displayMode in KaTeX
   */
  display: false,
  /**
   * Extend tokens of asciimath
   * ```ts
   * {
   *   // Simply transform `d0` to `d theta`
   *   'd0': { type: TokenTypes.Const, tex: '{\\text{d}\\theta}' },
   *   // Token with unary symbol, the `$1` will be replaced with the following symbol
   *   'tsc': { type: TokenTypes.OperatorOA, tex: '\\textsc{$1}' },
   *   // Token with binary symbols, the `$1` and `$2` will be replaced with the following two symbols
   *   'frac': { type: TokenTypes.OperatorOAB, tex: '\\frac{ $1 }{ $2 }' },
   *   // Infix expression, the `$1` and `$2` will be replaced with the previous symbol and next symbol respectively
   *   'over': { type: TokenTypes.OperatorAOB, tex: '{ $1 \\over $2 }' },
   * }
   * ```
   *
   * You can extend the token types mentioned above, but it is *not recommended* to extend all types of [`enum TokenTypes`](https://github.com/widcardw/asciimath-parser/blob/main/packages/core/src/symbols.ts#L1-L20).
   */
  symbols: {},
  /**
   * Replace target expressions before tokenizing
   * ```ts
   * [
   *   [/&#(x?[0-9a-fA-F]+);/g, (match, $1) =>
   *     String.fromCodePoint($1[0] === 'x' ? '0' + $1 : $1)
   *   ],
   *   ...
   * ]
   * ```
   */
  replaceBeforeTokenizing: [],
};
const am = new AsciiMath(cfg);
window.am = am; // 将am对象添加到全局window对象中

// console.log("preload.js loaded");
// console.log(am.toTex("sum _(n=1) ^(+oo) 1/(n^2) = (pi^2)/6"));
