var document = require('sketch/dom').getSelectedDocument()
var UI = require('sketch/ui')

export default (context) => {
    var selection = document.selectedLayers
    for (let i = 0; i < selection.length; i++) {
        const layer = selection[i];
        // const { bitmap } = exportLayerAsBitmap(document, layer, 1);
    }
    console.log(selection);
    // console.log(document.selectedPage);
    
    // var selection = context.selection,
    //     artboards = [];

    // for (var i = 0; i < selection.count(); i++) {
    //     try {
    //         // 取出选中的所有画板
    //         var artboard = selection[i].parentArtboard();
    //         if (artboards.indexOf(artboard) == -1) {
    //             // 过滤重复的画板
    //             artboards.push(artboard);
    //         }
    //     } catch (error) { }
    // }

    // if (artboards.length == 0) {
    //     // 并无选中的任何画板
    //     return;
    // }
    

    // // 此时 artboards 数组， 即为当前选中的所有画板

    // var selectionStrings = [];
    // artboards.forEach(artboard => {
    //     try {
    //         // 将画板转为JSON字符串，并保存在 selectionStrings 数组中
    //         selectionStrings.push(MSJSONDataArchiver.archiveStringWithRootObject_error_(artboard.immutableModelObject(), nil));
    //     } catch (error) { }
    // });

    // // 将selectionStrings数组转为数组JSON字符串
    // var selectionsString = '[' + selectionStrings.join(',') + ']';
}

function exportLayerAsBitmap(document, layer, scale) {  
    var slice,
      result = {},
      rect = layer.absoluteRect(),
      path = NSTemporaryDirectory() + layer.objectID() + '.png';
      console.log("==========="+path);
    NSMakeRect(rect.x(), rect.y(), rect.width(), rect.height()),
      (slice = MSExportRequest.exportRequestsFromExportableLayer(
        layer
      ).firstObject()),
      (slice.page = document.currentPage()),
      (slice.format = 'png'),
      (slice.scale = scale),
      document.saveArtboardOrSlice_toFile(slice, path);
  
    var url = NSURL.fileURLWithPath(path),
      bitmap = NSData.alloc().initWithContentsOfURL(url),
      base64 = bitmap.base64EncodedStringWithOptions(0);
  
    NSFileManager.defaultManager().removeItemAtURL_error(url, nil);
    var imgRep = NSBitmapImageRep.imageRepWithData(bitmap);
    return (
      (result.bitmap = base64),
      (result.width = imgRep.pixelsWide() / 4),
      (result.height = imgRep.pixelsHigh() / 4),
      result
    );
  }