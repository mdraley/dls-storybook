/* Bootstrap Enums */
var ButtonType;
(function (ButtonType) {
  ButtonType["submit"] = "submit";
  ButtonType["button"] = "button";
  ButtonType["reset"] = "reset";
})(ButtonType || (ButtonType = {}));
var Color;
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
})(Color || (Color = {}));
var FormCheckboxType;
(function (FormCheckboxType) {
  FormCheckboxType["checkbox"] = "checkbox";
  FormCheckboxType["radio"] = "radio";
})(FormCheckboxType || (FormCheckboxType = {}));
var FormTextInputType;
(function (FormTextInputType) {
  FormTextInputType["email"] = "email";
  FormTextInputType["password"] = "password";
  FormTextInputType["text"] = "text";
  FormTextInputType["number"] = "number";
  FormTextInputType["search"] = "search";
})(FormTextInputType || (FormTextInputType = {}));
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
var LogoColor;
(function (LogoColor) {
  LogoColor["white"] = "white";
  LogoColor["black"] = "black";
  LogoColor["blue"] = "blue";
})(LogoColor || (LogoColor = {}));
var Size;
(function (Size) {
  Size["sm"] = "sm";
  Size["lg"] = "lg";
})(Size || (Size = {}));
var SlideDirection;
(function (SlideDirection) {
  SlideDirection["right"] = "right";
  SlideDirection["left"] = "left";
})(SlideDirection || (SlideDirection = {}));
/* Arvest Enums */
var AccordionType;
(function (AccordionType) {
  AccordionType["table"] = "table";
  AccordionType["tableSimple"] = "table-simple";
  AccordionType["content"] = "content";
  AccordionType["nav"] = "nav";
  AccordionType["mobileNav"] = "mobileNav";
})(AccordionType || (AccordionType = {}));
var BadgeColor;
(function (BadgeColor) {
  BadgeColor["label"] = "label";
  BadgeColor["counter"] = "counter";
})(BadgeColor || (BadgeColor = {}));
var CardSelector;
(function (CardSelector) {
  CardSelector["localFavorites"] = "Local Favorites";
  CardSelector["aToZ"] = "A-Z";
  CardSelector["zToA"] = "Z-A";
})(CardSelector || (CardSelector = {}));
var CellVariant;
(function (CellVariant) {
  CellVariant[CellVariant["singleText"] = 0] = "singleText";
  CellVariant[CellVariant["bulletList"] = 1] = "bulletList";
  CellVariant[CellVariant["checkmark"] = 2] = "checkmark";
  CellVariant[CellVariant["dash"] = 3] = "dash";
  CellVariant[CellVariant["nonBulletList"] = 4] = "nonBulletList";
  CellVariant[CellVariant["na"] = 5] = "na";
})(CellVariant || (CellVariant = {}));
var StepperStates;
(function (StepperStates) {
  StepperStates["active"] = "active";
  StepperStates["complete"] = "complete";
  StepperStates["incomplete"] = "incomplete";
})(StepperStates || (StepperStates = {}));
var TypographyVariants;
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
})(TypographyVariants || (TypographyVariants = {}));
var TooltipPosition;
(function (TooltipPosition) {
  TooltipPosition["topLeft"] = "top-left";
  TooltipPosition["topCenter"] = "top-center";
  TooltipPosition["topRight"] = "top-right";
  TooltipPosition["bottomLeft"] = "bottom-left";
  TooltipPosition["bottomCenter"] = "bottom-center";
  TooltipPosition["bottomRight"] = "bottom-right";
})(TooltipPosition || (TooltipPosition = {}));
var TooltipCta;
(function (TooltipCta) {
  TooltipCta["text"] = "text";
  TooltipCta["button"] = "button";
})(TooltipCta || (TooltipCta = {}));
var TooltipTrigger;
(function (TooltipTrigger) {
  TooltipTrigger["hover"] = "hover";
  TooltipTrigger["click"] = "click";
})(TooltipTrigger || (TooltipTrigger = {}));
var ViewportBreakpoints;
(function (ViewportBreakpoints) {
  ViewportBreakpoints[ViewportBreakpoints["mobile"] = 375] = "mobile";
  ViewportBreakpoints[ViewportBreakpoints["tablet"] = 768] = "tablet";
  ViewportBreakpoints[ViewportBreakpoints["desktopSmall"] = 1241] = "desktopSmall";
  ViewportBreakpoints[ViewportBreakpoints["desktop"] = 1440] = "desktop";
  ViewportBreakpoints[ViewportBreakpoints["primaryHeroBreakpoint"] = 1020] = "primaryHeroBreakpoint";
})(ViewportBreakpoints || (ViewportBreakpoints = {}));
var SubNavTypes;
(function (SubNavTypes) {
  SubNavTypes["heading"] = "heading";
  SubNavTypes["link"] = "link";
  SubNavTypes["button"] = "button";
  SubNavTypes["ad"] = "ad";
})(SubNavTypes || (SubNavTypes = {}));
var MountStates;
(function (MountStates) {
  MountStates["UNMOUNTED"] = "unmounted";
  MountStates["MOUNTING"] = "mounting";
  MountStates["MOUNTED"] = "mounted";
  MountStates["UNMOUNTING"] = "unmounting";
})(MountStates || (MountStates = {}));

export { AccordionType as A, BadgeColor as B, Color as C, FormTextInputType as F, LogoColor as L, MountStates as M, SubNavTypes as S, TypographyVariants as T, ViewportBreakpoints as V, CellVariant as a, CardSelector as b, ButtonType as c, StepperStates as d, TooltipPosition as e, TooltipTrigger as f, TooltipCta as g, SlideDirection as h };
