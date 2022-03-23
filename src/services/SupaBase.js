import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55amdmemRnZnZvbmNwZ2hscmNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY3NjQ3MTQsImV4cCI6MTk2MjM0MDcxNH0.b5io-GjgQ45o5KX0YkZLYaUFIrUNlc_0TrF_rHDRBXU";
const supabaseUrl = "https://nyjgfzdgfvoncpghlrco.supabase.co";
const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

class SupaBase {
  async getAllYears() {
    let { data: dummyTable, error } = await supabase
      .from("dummyTable")
      .select("year");

    return dummyTable;
  }
  async getAllDepts(a) {
    let { data: dummyTable, error } = await supabase
      .from("dummyTable")
      .select("dept")
      .match(a);

    return dummyTable;
  }
  async getAllSecs(a) {
    let { data: dummyTable, error } = await supabase
      .from("dummyTable")
      .select("sec")
      .match(a);

    return dummyTable;
  }

  async getAllUsers(array) {
    const { data: dummyTable, error } = await supabase
      .from("dummyTable")
      .select("*")
      .match(array);
    return dummyTable;
  }
  async checkUserExists(array) {
    const { data: dummyTable, error } = await supabase
      .from("dummyTable")
      .select("*")
      .eq("email", array);
    return dummyTable;
  }

  async getuserinfo(email) {
    const { data: dummyTable, error } = await supabase
      .from("dummyTable")
      .select("*")
      .eq("email", email);
    return dummyTable;
  }
}

export default new SupaBase();
