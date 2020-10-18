console.log(cb_obj.value, "got selected");

source_d.data["dates"] = df_dict_d["dates"];
source_t.data["dates"] = df_dict_t["dates"];

var selected = cb_obj.value.split(":")[0];
source_d.data["selected"] = df_dict_d[selected];
source_t.data["selected"] = df_dict_t[selected];

source_d.change.emit();
source_t.change.emit();
