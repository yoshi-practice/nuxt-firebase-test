<template>
  <section class="container">
    <div>

      <!-- 新規登録フォーム -->
      <section>
        <h5>新規登録</h5>
        <p><input type="text" placeholder="メールアドレス"></p>
        <p><input type="password" placeholder="パスワード"></p>
        <div class="links">
          <button>新規登録</button>
        </div>
      </section>

      <!-- ログインフォーム -->
      <section>
        <h5>ログイン</h5>
        <p><input type="text" placeholder="メールアドレス"></p>
        <p><input type="password" placeholder="パスワード"></p>
        <div class="links">
          <button>ログイン</button>
        </div>
      </section>

      <!-- マイページ -->
      <section>
        <h5>ログイン中です</h5>
        <!-- ログイン中ユーザーのメールアドレスを表示 -->
        <p>メールアドレス：</p>
        <div class="links">
          <button>ログアウト</button>
        </div>
        <div>
          <ul><li>メッセージ</li></ul>
        </div>
        <div class="links">
          <p><input type="text" placeholder="メッセージ"></p>
          <button>メッセージ追加</button>
        </div>
      </section>

    </div>
  </section>
</template>

<style>
.container {
  padding: 100px;
}
</style>
