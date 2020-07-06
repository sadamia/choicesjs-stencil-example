import { Component, h } from '@stencil/core';
import 'choicesjs-stencil/dist/choicesjsstencil'

const projects = [
  { "value": "superstar", "label": "Superstar", "selected": false, "disabled": false },
  { "value": "adizero", "label": "adizero", "selected": false, "disabled": false },
  { "value": "stansmith", "label": "Stan Smith", "selected": false, "disabled": false },
  { "value": "gazelle", "label": "Gazelle", "selected": false, "disabled": false },
  { "value": "ultraboost", "label": "ultraboost", "selected": false, "disabled": false },
  { "value": "nmd", "label": "NMD", "selected": false, "disabled": false },
  { "value": "yeezy", "label": "YEEZY", "selected": false, "disabled": false },
  { "value": "campus", "label": "Campus", "selected": false, "disabled": false },
  { "value": "zx500", "label": "ZX 500", "selected": false, "disabled": true },
  { "value": "samba", "label": "Samba", "selected": false, "disabled": false },
  { "value": "predator", "label": "Predator", "selected": false, "disabled": false },
  { "value": "munchen", "label": "Munchen", "selected": false, "disabled": false },
  { "value": "zxflux", "label": "ZX Flux", "selected": false, "disabled": false },
  { "value": "eqt", "label": "EQT", "selected": false, "disabled": false },
  { "value": "solar", "label": "Solar", "selected": false, "disabled": false },
  { "value": "copa", "label": "Copa", "selected": false, "disabled": true },
  { "value": "terrex", "label": "Terrex", "selected": false, "disabled": false },
  { "value": "pureboost", "label": "pureboost", "selected": false, "disabled": false },
  { "value": "dragon", "label": "Dragon", "selected": false, "disabled": false },
  { "value": "yung", "label": "YUNG", "selected": false, "disabled": false },
  { "value": "deerupt", "label": "Deerupt", "selected": false, "disabled": false },
  { "value": "kamanda", "label": "kamanda", "selected": false, "disabled": false }
];

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {


  render() {
    return (
      <choicesjs-stencil
        placeholderValue="Select project"
        choices={projects}
        name="projects"
        type="single"
        searchFields={["label", "value"]}
        key={"label"}
        itemScope={true}
        searchEnabled={true}
        searchChoices={true}
        renderChoiceLimit={-1}
        searchFloor={1}
        position={"auto"}
        renderSelectedChoices={"auto"}
        silent={false}
        searchResultLimit={4}
        addItemText={(value) => {
          return `Press Enter to add <b>"${value}"</b>`;
        }}
        maxItemText={(maxItemCount) => {
          return `Only ${maxItemCount} values can be added`;
        }}
        valueComparer={(value1, value2) => {
          return value1 === value2;
        }}
        sorter={(a, b) => {
          return a.label.localeCompare(b.label);
        }}
        addItemFilter={value => {
          return /^[^\s]+$/.test(value);
        }}
        removeItems={true}
      ></choicesjs-stencil>
    );
  }
}
