/*
 * 5374 setting
*/
var SVGLabel = false; // SVGイメージを使用するときは、true。用意できない場合はfalse。
var MaxDescription = 9; // ごみの最大種類、９を超えない場合は変更の必要はありません。
var MaxMonth = 3;

var KoteiKN = false;    // 固定の休止期間１２月３０日～１月３日を使用するときはtrue。

var WeekShiftA = false; // 休止期間なら週をずらすときは、true。Ａ地区
var WeekShiftB = true;  // 休止期間なら週をずらすときは、true。Ｂ地区

var SkipSuspend = true; // 休止期間を除去するときは、true。奈良の仕様は、true。
