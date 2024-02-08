export default class TabbedDialog extends Dialog {
    constructor(data, options = {}) {
      // setting up tabs here instead of in defaultOptions so that we can easily set the initial tab
      options.tabs = [{navSelector: ".tabs", contentSelector: ".tab-content", initial: options.initial_tab || "tab1" }];
      super(data, options)

      this.tabChangeCallback = options.tabChangeCallback;
    }
  
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        template: `modules/lazy-monster-builder/templates/tab_template.hbs`,
      });
    }

    activateListeners(html) {
      super.activateListeners(html);
    
      if (this.tabChangeCallback) {
        html.find(".tabs a").click(ev => {
          const activeTabId = ev.currentTarget.dataset.tab;
          this.tabChangeCallback(activeTabId, html);
        });
      }
    
      this._tabs[0].bind(html[0]);
    }
    
  
    getData() {
      // console.log("getData", this);
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