import { Component } from '@angular/core';
@Component({ selector: 'app-footer', template: `<footer class="site-footer"><div class="section-container"><p>&copy; {{ year }} Ahmad Awada</p><p>Designed with intent. Built with Angular.</p><a href="#home">Back to top &uarr;</a></div></footer>` })
export class Footer { readonly year = new Date().getFullYear(); }
