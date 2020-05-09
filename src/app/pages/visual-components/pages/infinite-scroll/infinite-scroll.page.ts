import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage {

  public limit = 3;
  // tslint:disable: max-line-length
  public data = [
    { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim placerat tellus, ac ultrices leo gravida et. Nulla facilisi. Praesent ornare, felis in vulputate cursus, nisl neque posuere felis, a posuere augue nulla quis mi. Ut libero justo, faucibus vel dolor id, consectetur finibus velit. Integer pulvinar vel felis quis egestas. Maecenas rhoncus, orci quis imperdiet faucibus, augue risus interdum mauris, at faucibus velit libero nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu maximus tellus, sed eleifend nunc. Fusce posuere ullamcorper turpis, sed ullamcorper dolor bibendum nec. Donec at consequat nisl. Etiam vestibulum porttitor varius. Aliquam erat volutpat. Quisque convallis tortor arcu, sed lacinia magna iaculis sit amet. Quisque sit amet dictum leo. Etiam mollis facilisis quam auctor aliquam.'},
    { content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent a venenatis metus, vitae mollis nunc. Praesent et augue at nulla tempus venenatis a a tellus. Nam ipsum risus, sodales vel arcu eget, fermentum pharetra odio. Nulla porttitor pretium turpis, eu tempus nisl bibendum scelerisque. Phasellus ut lorem mattis, laoreet justo sed, interdum leo. Donec in augue in ipsum tincidunt imperdiet. Nunc neque ante, ullamcorper ut dolor quis, porttitor cursus elit. Fusce in felis posuere, venenatis purus sit amet, iaculis risus. Phasellus congue tellus felis, vel pretium massa lobortis in. Ut eget lectus fringilla, sodales augue sit amet, viverra quam. Nullam ac varius nibh, sit amet porttitor nisl. Duis ac lacus nunc. Praesent pharetra sollicitudin mauris, eget sagittis turpis tristique sed. Duis tincidunt, quam vel rutrum hendrerit, dolor ligula fermentum nisi, a sollicitudin dui ipsum et augue. Duis convallis justo viverra sem convallis, eget malesuada mauris dictum.'},
    { content: 'Sed vel pretium leo, quis lacinia enim. Quisque ut sem nisi. Pellentesque at interdum leo, quis aliquet diam. Quisque tristique ipsum quis lacus placerat mattis quis condimentum est. Duis finibus felis quis nibh porta mattis. Nam tincidunt scelerisque facilisis. Nulla vulputate convallis metus et mattis. Cras quis mi vel lacus euismod auctor non nec ex. Nam sit amet velit quis mi suscipit scelerisque a sed tortor. Mauris ultrices volutpat libero hendrerit tincidunt. Ut at elit ipsum.'},
    { content: 'Suspendisse ut rhoncus metus. Cras ullamcorper tincidunt aliquet. Integer quis magna pretium ante dictum lobortis eget nec sem. Cras quis elit semper, ornare ligula nec, convallis magna. Aenean eu volutpat nunc. Suspendisse potenti. Curabitur vel diam metus. Praesent elit elit, ornare facilisis lectus sed, pretium bibendum elit. Nam ac metus sed enim fermentum tristique.'},
    { content: 'Vivamus id mauris sed tortor viverra eleifend. Donec congue nunc arcu, nec hendrerit turpis porttitor vitae. Curabitur viverra massa sed augue pulvinar, in posuere urna luctus. Sed ut lorem sed lorem viverra aliquam. Curabitur euismod, nulla porta ullamcorper tincidunt, nunc dolor mollis nisl, a pretium turpis libero tincidunt nisi. Pellentesque at semper urna. Sed quis tempus urna. Etiam egestas pulvinar eros, nec consectetur odio feugiat eget. Phasellus finibus rhoncus venenatis. Donec aliquam mi nec libero pellentesque, id auctor est malesuada. Integer et scelerisque mi. Suspendisse accumsan ac risus ac volutpat.'},
    { content: 'Sed vehicula in augue non cursus. Praesent id ex accumsan, aliquet metus eget, posuere nibh. Duis feugiat ullamcorper pellentesque. Maecenas auctor et est ut vestibulum. Aenean imperdiet dapibus lectus, eu feugiat eros rutrum eget. Ut velit ipsum, aliquet eget metus quis, dapibus vulputate leo. Suspendisse porta dictum tempor. Nunc ullamcorper est ac mauris venenatis malesuada in feugiat dui. Integer cursus porta ipsum. Maecenas vitae lectus sed nibh efficitur ullamcorper. Curabitur id ullamcorper justo.'},
    { content: 'Suspendisse in quam ultricies, eleifend neque vitae, rhoncus elit. Morbi quis pretium arcu. Donec non vehicula erat. Integer gravida commodo orci consectetur pulvinar. Sed in eros vitae nibh cursus varius quis et tortor. Duis non sapien scelerisque lectus ullamcorper tempus. Quisque nec urna pellentesque tellus mollis tincidunt pretium eu quam.'},
    { content: 'Sed consectetur ligula ut sollicitudin tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer viverra eros enim. Aliquam vehicula hendrerit orci sed auctor. Aliquam tincidunt eros in dui tincidunt, sed rutrum lacus porttitor. Curabitur pretium augue non justo posuere, quis interdum erat volutpat. Nunc rutrum in ante fermentum porta. Cras venenatis ultrices metus, et consectetur lectus congue ac. Morbi nec lacus velit.'},
    { content: 'Curabitur placerat accumsan lacus, sit amet dignissim metus. Quisque tincidunt blandit augue sit amet tempus. Nulla vestibulum feugiat urna vitae convallis. Etiam luctus risus lacinia, dictum tellus ut, accumsan turpis. Proin commodo pulvinar tellus nec rutrum. Curabitur sapien lacus, placerat non imperdiet non, venenatis vitae mi. Vestibulum lacinia convallis feugiat. Suspendisse pharetra urna non lorem pulvinar, vel malesuada felis commodo. Mauris quis semper ipsum. In eget accumsan lacus, a ultrices erat. Maecenas sit amet eros leo. Phasellus at felis nulla. Duis viverra risus at ipsum finibus egestas. Morbi varius felis rutrum pellentesque dignissim. Nullam ex ante, venenatis eget porta porttitor, ultrices luctus nibh.'},
    { content: 'Pellentesque blandit, lacus fermentum volutpat congue, est ex lacinia massa, at ultricies urna est at tortor. Curabitur tincidunt varius orci quis egestas. Mauris rutrum auctor augue, sit amet viverra lorem maximus id. Cras vitae ligula quis ex rhoncus volutpat. In eget euismod lacus, non ullamcorper neque. Ut finibus volutpat dolor ac cursus. Aliquam erat volutpat. Quisque fringilla urna at eleifend fermentum. Integer a nisi lacus.'},
    { content: 'Suspendisse ut rhoncus metus. Cras ullamcorper tincidunt aliquet. Integer quis magna pretium ante dictum lobortis eget nec sem. Cras quis elit semper, ornare ligula nec, convallis magna. Aenean eu volutpat nunc. Suspendisse potenti. Curabitur vel diam metus. Praesent elit elit, ornare facilisis lectus sed, pretium bibendum elit. Nam ac metus sed enim fermentum tristique.'},
    { content: 'Vivamus id mauris sed tortor viverra eleifend. Donec congue nunc arcu, nec hendrerit turpis porttitor vitae. Curabitur viverra massa sed augue pulvinar, in posuere urna luctus. Sed ut lorem sed lorem viverra aliquam. Curabitur euismod, nulla porta ullamcorper tincidunt, nunc dolor mollis nisl, a pretium turpis libero tincidunt nisi. Pellentesque at semper urna. Sed quis tempus urna. Etiam egestas pulvinar eros, nec consectetur odio feugiat eget. Phasellus finibus rhoncus venenatis. Donec aliquam mi nec libero pellentesque, id auctor est malesuada. Integer et scelerisque mi. Suspendisse accumsan ac risus ac volutpat.'}
  ].map(dt => ({title: dt.content.slice(0, 18), content: dt.content}));
  // tslint:enable: max-line-length

  public populateInfiniteScroll(ev: any) {
    console.log(this.limit);
    if (this.limit < this.data.length) {
      this.limit += 3;
    }
    ev.target.complete();
  }
}