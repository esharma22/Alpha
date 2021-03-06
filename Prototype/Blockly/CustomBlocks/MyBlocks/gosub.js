Blockly.Blocks['roblockwar_gosub'] = {
  init: function() {
    this.setColour(285);
    this.appendDummyInput()
        .appendField("SubCall:")
        .appendField(new Blockly.FieldTextInput(""), "LabelName");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["roblockwar_gosub",
                                     "roblockwar_fire",
                                     "roblockwar_if",
                                     "roblockwar_label",
                                     "roblockwar_setRegister"]);
    this.setNextStatement(true, ["roblockwar_endsub",
                                 "roblockwar_fire",
                                 "roblockwar_gosub",
                                 "roblockwar_goto",
                                 "roblockwar_if",
                                 "roblockwar_label",
                                 "roblockwar_setRegister"]);
    this.setTooltip('Go to SubCall and then return here');
  }
};

Blockly.JavaScript['roblockwar_gosub'] = function(block) {
  var text_labelname = block.getFieldValue('LabelName');
  
  var code = '{ state_stack.push(\'rtn_sub_' + block.id + '_\'); state_stack.push(\'' + text_labelname + '\'); break; } case \'rtn_sub_' + block.id + '_\': ';
  return code;
};