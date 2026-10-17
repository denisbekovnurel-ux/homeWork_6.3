import { useState } from "react";
import { Button, Card, Input } from "./components/ui";

export default function App() {
  const [password, setPassword] = useState("");
  const passwordError = password.length > 0 && password.length < 8;

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">
        Профиль пользователя
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <h2 className="mb-4 text-lg font-semibold">Личные данные</h2>
          <div className="flex flex-col gap-3">
            <Input placeholder="Имя" defaultValue="Nurr" />
            <Input type="email" placeholder="Email" />
            <Button>Сохранить</Button>
          </div>
        </Card>

        <Card>
          <h2 className="mb-4 text-lg font-semibold">Безопасность</h2>
          <div className="flex flex-col gap-3">
            <Input
              type="password"
              placeholder="Новый пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isError={passwordError}
            />
            {passwordError && (
              <p className="text-sm text-red-600">Минимум 8 символов</p>
            )}
            <div className="flex gap-2">
              <Button variant="secondary" size="sm">
                Отмена
              </Button>
              <Button size="sm" disabled={passwordError || !password}>
                Обновить
              </Button>
            </div>
          </div>
        </Card>

        <Card className="sm:col-span-2 lg:col-span-1">
          <h2 className="mb-2 text-lg font-semibold">Опасная зона</h2>
          <p className="mb-4 text-sm text-gray-600">
            Удаление аккаунта необратимо.
          </p>
          <Button variant="danger" size="lg">
            Удалить аккаунт
          </Button>
        </Card>
      </div>
    </div>
  );
}
