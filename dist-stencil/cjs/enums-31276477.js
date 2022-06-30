'use strict';

/* Bootstrap Enums */
exports.ButtonType = void 0;
(function (ButtonType) {
  ButtonType["submit"] = "submit";
  ButtonType["button"] = "button";
  ButtonType["reset"] = "reset";
})(exports.ButtonType || (exports.ButtonType = {}));
exports.Color = void 0;
(function (Color) {
  Color["white"] = "white";
  Color["grayscale01"] = "grayscale01";
  Color["grayscale02"] = "grayscale02";
  Color["grayscale03"] = "grayscale03";
  Color["grayscale04"] = "grayscale04";
  Color["grayscale05"] = "grayscale05";
  Color["grayscale06"] = "grayscale06";
  Color["grayscale07"] = "grayscale07";
  Color["black"] = "black";
  Color["primary01"] = "primary01";
  Color["primary02"] = "primary02";
  Color["secondary01"] = "secondary01";
  Color["accent01"] = "accent01";
  Color["hover01"] = "hover01";
  Color["alertgreen"] = "alertgreen";
  Color["tabletint"] = "tabletint";
})(exports.Color || (exports.Color = {}));
var FormCheckboxType;
(function (FormCheckboxType) {
  FormCheckboxType["checkbox"] = "checkbox";
  FormCheckboxType["radio"] = "radio";
})(FormCheckboxType || (FormCheckboxType = {}));
exports.FormTextInputType = void 0;
(function (FormTextInputType) {
  FormTextInputType["email"] = "email";
  FormTextInputType["password"] = "password";
  FormTextInputType["text"] = "text";
  FormTextInputType["number"] = "number";
  FormTextInputType["search"] = "search";
})(exports.FormTextInputType || (exports.FormTextInputType = {}));
var GridType;
(function (GridType) {
  GridType["container"] = "container";
  GridType["containerfluid"] = "container-fluid";
  GridType["row"] = "row";
  GridType["col"] = "col";
})(GridType || (GridType = {}));
var Justify;
(function (Justify) {
  Justify["center"] = "center";
  Justify["start"] = "start";
  Justify["end"] = "end";
})(Justify || (Justify = {}));
exports.LogoColor = void 0;
(function (LogoColor) {
  LogoColor["white"] = "white";
  LogoColor["black"] = "black";
  LogoColor["blue"] = "blue";
})(exports.LogoColor || (exports.LogoColor = {}));
var Size;
(function (Size) {
  Size["sm"] = "sm";
  Size["lg"] = "lg";
})(Size || (Size = {}));
exports.SlideDirection = void 0;
(function (SlideDirection) {
  SlideDirection["right"] = "right";
  SlideDirection["left"] = "left";
})(exports.SlideDirection || (exports.SlideDirection = {}));
/* Arvest Enums */
exports.AccordionType = void 0;
(function (AccordionType) {
  AccordionType["table"] = "table";
  AccordionType["tableSimple"] = "table-simple";
  AccordionType["content"] = "content";
  AccordionType["nav"] = "nav";
  AccordionType["mobileNav"] = "mobileNav";
})(exports.AccordionType || (exports.AccordionType = {}));
exports.BadgeColor = void 0;
(function (BadgeColor) {
  BadgeColor["label"] = "label";
  BadgeColor["counter"] = "counter";
})(exports.BadgeColor || (exports.BadgeColor = {}));
exports.CardSelector = void 0;
(function (CardSelector) {
  CardSelector["localFavorites"] = "Local Favorites";
  CardSelector["aToZ"] = "A-Z";
  CardSelector["zToA"] = "Z-A";
})(exports.CardSelector || (exports.CardSelector = {}));
exports.CellVariant = void 0;
(function (CellVariant) {
  CellVariant[CellVariant["singleText"] = 0] = "singleText";
  CellVariant[CellVariant["bulletList"] = 1] = "bulletList";
  CellVariant[CellVariant["checkmark"] = 2] = "checkmark";
  CellVariant[CellVariant["dash"] = 3] = "dash";
  CellVariant[CellVariant["nonBulletList"] = 4] = "nonBulletList";
  CellVariant[CellVariant["na"] = 5] = "na";
})(exports.CellVariant || (exports.CellVariant = {}));
exports.StepperStates = void 0;
(function (StepperStates) {
  StepperStates["active"] = "active";
  StepperStates["complete"] = "complete";
  StepperStates["incomplete"] = "incomplete";
})(exports.StepperStates || (exports.StepperStates = {}));
exports.TypographyVariants = void 0;
(function (TypographyVariants) {
  TypographyVariants["h1"] = "h1";
  TypographyVariants["h2"] = "h2";
  TypographyVariants["h3"] = "h3";
  TypographyVariants["h4"] = "h4";
  TypographyVariants["subheading"] = "subheading";
  TypographyVariants["body1"] = "body1";
  TypographyVariants["body2"] = "body2";
  TypographyVariants["action"] = "action";
  TypographyVariants["navigation"] = "navigation";
  TypographyVariants["mobileNavigation"] = "mobileNavigation";
  TypographyVariants["labels"] = "labels";
  TypographyVariants["caption"] = "caption";
})(exports.TypographyVariants || (exports.TypographyVariants = {}));
exports.TooltipPosition = void 0;
(function (TooltipPosition) {
  TooltipPosition["topLeft"] = "top-left";
  TooltipPosition["topCenter"] = "top-center";
  TooltipPosition["topRight"] = "top-right";
  TooltipPosition["bottomLeft"] = "bottom-left";
  TooltipPosition["bottomCenter"] = "bottom-center";
  TooltipPosition["bottomRight"] = "bottom-right";
})(exports.TooltipPosition || (exports.TooltipPosition = {}));
exports.TooltipCta = void 0;
(function (TooltipCta) {
  TooltipCta["text"] = "text";
  TooltipCta["button"] = "button";
})(exports.TooltipCta || (exports.TooltipCta = {}));
exports.TooltipTrigger = void 0;
(function (TooltipTrigger) {
  TooltipTrigger["hover"] = "hover";
  TooltipTrigger["click"] = "click";
})(exports.TooltipTrigger || (exports.TooltipTrigger = {}));
exports.ViewportBreakpoints = void 0;
(function (ViewportBreakpoints) {
  ViewportBreakpoints[ViewportBreakpoints["mobile"] = 375] = "mobile";
  ViewportBreakpoints[ViewportBreakpoints["tablet"] = 768] = "tablet";
  ViewportBreakpoints[ViewportBreakpoints["desktopSmall"] = 1241] = "desktopSmall";
  ViewportBreakpoints[ViewportBreakpoints["desktop"] = 1440] = "desktop";
  ViewportBreakpoints[ViewportBreakpoints["primaryHeroBreakpoint"] = 1020] = "primaryHeroBreakpoint";
})(exports.ViewportBreakpoints || (exports.ViewportBreakpoints = {}));
exports.SubNavTypes = void 0;
(function (SubNavTypes) {
  SubNavTypes["heading"] = "heading";
  SubNavTypes["link"] = "link";
  SubNavTypes["button"] = "button";
  SubNavTypes["ad"] = "ad";
})(exports.SubNavTypes || (exports.SubNavTypes = {}));
exports.MountStates = void 0;
(function (MountStates) {
  MountStates["UNMOUNTED"] = "unmounted";
  MountStates["MOUNTING"] = "mounting";
  MountStates["MOUNTED"] = "mounted";
  MountStates["UNMOUNTING"] = "unmounting";
})(exports.MountStates || (exports.MountStates = {}));
