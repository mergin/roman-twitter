import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the HighlightPipe pipe.
 * Highlights hashtags and mentions
 */
@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
	transform(text: string): string {
	    var regex = /((^|\s)((#)[a-z\d-]+))|(\B@[a-z0-9_-]+)/gi;
	    text = text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
	    text = '<p class="tweet-text">'+text+'</p>';

	    return text;
	}
}
