export default class TabbedDialog extends Dialog {
    constructor(data, options = {}) {
      // setting up tabs here instead of in defaultOptions so that we can easily set the initial tab
      options.tabs = [{navSelector: ".tabs", contentSelector: ".tab-content", initial: options.initial_tab || "tab1"}];
      super(data, options)
    }
  
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        template: `modules/lazy-monster-builder/templates/tab_template.hbs`,
      });
    }
  
    getData() {
      console.log("getData", this);
      // no super to Application
      const data = super.getData();
  
      data.tabs = this.data.tabs.map((t, idx) => {
        return {
          id: t.id || `tab${idx + 1}`,
          title: t.title || `Tab ${idx + 1}`,
          icon: t.icon || "fas fa-dice-d20",
          content: t.content || ""
        }
      });
  
      data.header = this.data.header;
      data.footer = this.data.footer;
  
      console.log(data);
  
      return data;
    }
  
    // In Foundry 0.7.9 we would have needed to call Application.prototype.activateListeners directly. Can remove for 0.8.7.
    /*
    activateListeners(html) {
      super.activateListeners(html);
      Application.prototype.activateListeners.call(this, html);
    }
    */
  }